# Renan Galan Guerra — Trajetória

Uma apresentação editorial em formato de slide/site. React 19 + Vite 6, PT/EN, dez telas e design system reutilizável. Baseada na primeira direção visual escolhida.

## Desenvolvimento

Use Node 22 (veja `.nvmrc`), ou uma versão que satisfaça `engines`.

```sh
npm ci
npm run dev
```

O servidor de desenvolvimento já foi iniciado nesta sessão em `http://127.0.0.1:5173/`.

- Apresentação: `/#/pt/inicio`
- Inglês: `/#/en/inicio`
- Design system: `/#/pt/design-system`

## Edição

O conteúdo está em `src/data/presentation.js`, organizado em PT e EN. Os campos entre colchetes indicam informações a preencher. Fontes, paleta e espaçamentos estão em `src/design-system/tokens.css`.

O botão de configurações no cabeçalho permite mudar o idioma e a cor de destaque, com seletor de cor ou código hexadecimal. As preferências ficam salvas neste navegador. “Restaurar azul padrão” retorna a cor para `#193CF5`.

- [Design system](docs/design-system.md)
- [Estrutura de páginas](docs/page-structure.md)
- [Referência visual](docs/design-reference.png)
- [Revisão visual e verificações](design-qa.md)

## Verificação e build

```sh
npm test
npm run build
```

`npm test` verifica rotas diretas, troca de idioma, limites de navegação e completude das traduções. A revisão visual e de interação é feita no navegador.

O build produz arquivos estáticos em `dist/client`. O template também preserva os arquivos de compatibilidade com Sites em `dist/server` e `dist/.openai`. Nenhuma publicação foi realizada. Antes de publicar via Sites, execute também `npm run test:sites`.

## Escopo da v0

Inclui navegação por capítulos e teclado, links diretos, histórico do navegador, idioma persistente, tela cheia, layout responsivo e redução de movimento. Não inclui backend ou editor de conteúdo visual; a edição ocorre no arquivo de dados.
