# Checkpoint — referência completa

Aplicação de consulta do [guia prático do grupo](../guia-desenvolvimento/guia-checkpoint.html). No início da aula, a turma recebe somente o ZIP de recursos e cria seu próprio projeto pelo gerador. O GitHub completo, com esta referência e o guia, será disponibilizado ao final para continuação.

```sh
npm ci
npm run dev
```

Use a porta mostrada pelo terminal. Para conferir:

```sh
npm run lint
npm run build
```

## Rotas

- `/`: nove jogos, detalhes e botões de curtir.
- `/sobre`: apresentação do projeto.
- `/jogos/[id]`: detalhes; IDs inexistentes chamam `notFound()`.
- `/curtidos`: seleção pessoal, remoção e estado vazio.

## Estado e persistência

`CurtidosProvider` guarda os IDs únicos e compartilha a seleção entre botões, lista e balão. O layout continua um Server Component e envolve o conteúdo com esse provedor cliente. `ListaCurtidos` filtra os dados locais; nenhuma consulta a API é necessária.

O provedor lê `checkpoint-curtidos-v1` no `localStorage` após a hidratação. A gravação só começa após essa leitura. IDs inválidos são ignorados e duplicatas são removidas. Se o navegador bloquear a gravação, a seleção continua na visita e a página Curtidos informa a falha. Não há conta ou sincronização entre navegadores/computadores.

O percurso principal do guia termina nos detalhes, na etapa 6. O complemento 7 usa um botão local; as etapas 8–10 constroem compartilhamento, lista e persistência gradualmente. A referência mostra todos os complementos concluídos, preservando os nove jogos combinados.

Next.js 16.4.4, React/React DOM 19.3.0. Dependências reproduzidas pelo lockfile. Imagens locais e fontes em `public/jogos/fontes.json`.
