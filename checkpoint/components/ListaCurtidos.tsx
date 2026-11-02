"use client";

import Image from "next/image";
import Link from "next/link";
import { jogos } from "@/lib/jogos";
import { useCurtidos } from "@/components/CurtidosProvider";
import BotaoCurtir from "@/components/BotaoCurtir";

export default function ListaCurtidos() {
  const { ids, carregado, erro } = useCurtidos();
  const selecionados = jogos.filter((jogo) => ids.includes(jogo.id));

  if (!carregado) return <p role="status">Carregando seus curtidos…</p>;

  return (
    <>
      {erro && <p className="aviso" role="status">{erro}</p>}
      {selecionados.length === 0 ? (
        <section className="vazio">
          <span className="coracao" aria-hidden="true">♡</span>
          <h2>Sua próxima aventura ainda está por aqui.</h2>
          <p>Curta um jogo no catálogo ou nos detalhes para encontrá-lo nesta lista.</p>
          <Link href="/" className="botao-link">Explorar jogos ↗</Link>
        </section>
      ) : (
        <ul className="jogos">
          {selecionados.map((jogo) => (
            <li key={jogo.id} className="card">
              <Image src={jogo.imagem} alt={jogo.titulo} width={460} height={215} />
              <div className="card-conteudo">
                <p className="genero">{jogo.genero}</p>
                <h2>{jogo.titulo}</h2>
                <div className="card-acoes">
                  <Link href={`/jogos/${jogo.id}`}>Ver detalhes ↗</Link>
                  <BotaoCurtir jogoId={jogo.id} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
