# Checkpoint — minicurso de Next.js

Catálogo de nove jogos para aprender páginas, layout, navegação, rotas dinâmicas e interatividade. A referência completa inclui curtidos com contador no menu, lista pessoal e persistência no navegador.

## Material inicial para a turma

1. No início da aula, receba e extraia [materiais-turma.zip](materiais-turma.zip).
2. Localize a pasta `recursos`, com CSS, imagens e textos/dados.
3. Acompanhe a explicação do grupo para instalar o Next.js e escrever sua própria aplicação.

O ZIP inicial não contém o guia nem código de páginas ou componentes. A turma cria o projeto do zero, sem base pronta e sem precisar de Git. Node.js e npm devem estar instalados; a instalação dos pacotes precisa de internet.

O [guia prático](guia-desenvolvimento/guia-catalogo-jogos.html) é o roteiro usado pelo grupo para preparar e apresentar a aula. Ele fica no repositório, separado do ZIP inicial.

## Continuar depois da aula

Ao final da aula, o grupo disponibilizará este GitHub completo, incluindo guia, recursos e código de referência. Quem quiser poderá retomar da última etapa concluída e comparar os arquivos.

Use **Code → Download ZIP** para baixar o repositório completo sem Git. Depois de extrair, abra `guia-desenvolvimento/guia-catalogo-jogos.html` no navegador. Esse download completo é diferente do ZIP inicial, que contém somente recursos.

## Executar a referência completa

Baixe este repositório pelo botão **Code → Download ZIP** e extraia. Abra um terminal dentro de `checkpoint`:

```sh
npm ci
npm run dev
```

Abra o endereço mostrado pelo terminal e mantenha o servidor em execução. No PowerShell, use `npm.cmd` se houver bloqueio de `npm.ps1`.

Esta aplicação é referência para testar, comparar e continuar depois da aula. Mantenha sua própria prática em outra pasta. Não execute `create-next-app` novamente para rodar a referência baixada.

## Ordem de aprendizado

| Etapas | Resultado |
| --- | --- |
| 0–3 | Ambiente, criação do Next.js, primeira edição e recursos |
| 4 | Sobre mínima e navegação compartilhada |
| 5–6 | Catálogo e detalhes de cada jogo |
| 7 | Botão Curtir / Curtido com estado local |
| 8–9 · complementos | Estado compartilhado, balão no menu e página Curtidos |
| 10 · complemento | Favoritos preservados após recarregar |
| 11 · complemento | Sobre completa e metadata |

São oito etapas essenciais e quatro complementos. Há um checkpoint para o intervalo entre as duas aulas. Priorize catálogo, detalhes e primeira interação; preserve margem para instalação, internet e diferentes ritmos. Continue depois da aula a partir da última etapa concluída.

## Conferir com o grupo

- Abra `/`, `/sobre` e `/jogos/2`; confira o menu e o retorno ao catálogo.
- Curta dois jogos diferentes: o balão deve mostrar 2 e `/curtidos` deve listar os dois.
- Recarregue, remova um e depois remova todos; confira a quantidade e a mensagem de lista vazia.
- Teste `/jogos/99` e `/jogos/abc`: devem mostrar não encontrado.
- Reduza a janela e confira menu e cards sem rolagem horizontal.
- Abra o guia, marque uma etapa e escreva uma nota; recarregue para conferir o salvamento.

Dentro de `checkpoint`, execute também:

```sh
npm run lint
npm run build
```

Ensaiem a instalação e a prática no computador do laboratório antes da aula.

## Estrutura

```text
checkpoint/       aplicação completa para consulta
guia-desenvolvimento/      guia do grupo e recursos da aula
materiais-turma.zip   somente recursos para distribuir no início
```

O gerador da prática está fixado em `create-next-app@16.4.4`. A referência preserva o lockfile: use `npm ci` para instalar as dependências.

Os curtidos ficam neste navegador e endereço, sem conta, banco ou sincronização entre computadores. O balão conta jogos diferentes; clicar novamente remove o jogo.

Imagens de divulgação e marcas pertencem aos respectivos titulares. Fontes em [fontes.json](checkpoint/public/jogos/fontes.json). Confira a situação de lançamento do GTA VI antes da apresentação.
