import type { Metadata } from "next";
import Link from "next/link";
import CurtidosProvider from "@/components/CurtidosProvider";
import LinkCurtidos from "@/components/LinkCurtidos";
import "./globals.css";

export const metadata: Metadata = {
  title: "Checkpoint | Catálogo de Jogos",
  description: "Encontre seu próximo jogo em um catálogo criado no minicurso de Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <CurtidosProvider>
          <header className="topo">
            <Link href="/" className="logo" aria-label="Checkpoint — início">
              Checkpoint<span>.</span>
            </Link>
            <nav className="menu" aria-label="Menu principal">
              <Link href="/sobre">Sobre</Link>
              <Link href="/">Jogos</Link>
              <LinkCurtidos />
            </nav>
          </header>
          {children}
        </CurtidosProvider>
      </body>
    </html>
  );
}
