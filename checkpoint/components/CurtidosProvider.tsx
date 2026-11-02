"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { jogos } from "@/lib/jogos";

const CHAVE = "checkpoint-curtidos-v1";
type Estado = { ids: number[]; carregado: boolean };
type Contexto = Estado & { alternar: (id: number) => void; erro: string | null };
const CurtidosContext = createContext<Contexto | null>(null);

export default function CurtidosProvider({ children }: { children: ReactNode }) {
  const [estado, setEstado] = useState<Estado>({ ids: [], carregado: false });
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    let ids: number[] = [];
    try {
      const dados: unknown = JSON.parse(localStorage.getItem(CHAVE) ?? "[]");
      if (Array.isArray(dados)) {
        ids = [...new Set(dados.filter((id): id is number =>
          typeof id === "number" && jogos.some((jogo) => jogo.id === id)
        ))];
      }
    } catch {
      // O catálogo continua utilizável quando o navegador bloqueia o armazenamento.
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Lê o armazenamento externo somente após a hidratação.
    setEstado({ ids, carregado: true });
  }, []);

  useEffect(() => {
    if (!estado.carregado) return;
    try {
      localStorage.setItem(CHAVE, JSON.stringify(estado.ids));
    } catch {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Informa a falha de sincronização com o armazenamento externo.
      setErro("Não foi possível salvar neste navegador. Os curtidos ficam disponíveis nesta visita.");
    }
  }, [estado]);

  function alternar(id: number) {
    if (!estado.carregado || !jogos.some((jogo) => jogo.id === id)) return;
    setEstado((atual) => ({
      ...atual,
      ids: atual.ids.includes(id)
        ? atual.ids.filter((item) => item !== id)
        : [...atual.ids, id],
    }));
  }

  return (
    <CurtidosContext.Provider value={{ ...estado, alternar, erro }}>
      {children}
    </CurtidosContext.Provider>
  );
}

export function useCurtidos() {
  const contexto = useContext(CurtidosContext);
  if (!contexto) throw new Error("useCurtidos precisa estar dentro de CurtidosProvider.");
  return contexto;
}
