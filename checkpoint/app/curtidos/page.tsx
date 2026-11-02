import ListaCurtidos from "@/components/ListaCurtidos";

export default function Curtidos() {
  return (
    <main className="container">
      <header className="intro">
        <p className="etiqueta">SUA SELEÇÃO</p>
        <h1>Os seus <span>favoritos.</span></h1>
        <p>Os jogos que você curtiu, reunidos em um só lugar.</p>
      </header>
      <ListaCurtidos />
    </main>
  );
}
