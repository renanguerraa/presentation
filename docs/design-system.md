# RG — Editorial Design System v0.1

A direção escolhida é a primeira proposta visual, preservada em `design-reference.png`. O sistema combina grandes títulos serifados, navegação discreta, linhas finas e espaço livre. A base está em `src/design-system/tokens.css`; a página navegável está em `#/pt/design-system`.

## Fundamentos

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-paper` | `#F2F0E9` | Fundo principal |
| `--color-ink` | `#191919` | Texto principal |
| `--color-accent` | `#193CF5` | Ações, título em destaque e capítulo ativo |
| `--color-muted` | `#6E6E73` | Texto secundário |
| `--color-rule` | `#C9C8C3` | Divisórias decorativas |
| `--color-accent-soft` | `#E6E8F7` | Mensagens de interface |
| `--color-accent-hover` | `#112CC4` | Hover da ação principal |

O azul e o texto secundário foram escolhidos para manter contraste sobre o marfim. A cor das divisórias não deve ser usada para texto.

## Tipografia

- **Bodoni Moda Variable**: títulos, numeração editorial e marca tipográfica. Peso 500 em títulos internos, 600 na capa, 800 na marca. Tracking aproximado de −0.04 a −0.065 em. Entrelinha de 1.02–1.12.
- **Inter Variable**: interface, descrição e metadados. Pesos 400–600. Corpo de 16 px, texto de apoio de 18–24 px, entrelinha até 1.65.
- Rótulos: 10–12 px, caixa alta, tracking de 0.2 em. Restritos a metadados, nunca a texto corrido.
- Fontes hospedadas junto ao aplicativo via pacotes Fontsource; nenhuma requisição ao Google Fonts durante a apresentação. O subconjunto Latin cobre os acentos de PT e os caracteres de EN.
- Escala responsiva: títulos se ajustam com `clamp()`. No celular, os capítulos usam uma coluna e rolagem natural.

Fontes consultadas: [Bodoni Moda / Fontsource](https://fontsource.org/fonts/bodoni-moda/install), [Phosphor React](https://github.com/phosphor-icons/react). Os ícones Phosphor no peso light acompanham as divisórias finas da referência.

## Espaçamento e composição

A escala é 4, 8, 12, 16, 24, 32, 40, 48, 64, 80 e 96 px. O recuo externo é `clamp(24px, 4.5vw, 80px)`. O conteúdo tem largura máxima de 1600 px, além dos recuos. O desktop apresenta duas colunas; uma ideia principal à esquerda e contexto à direita. Em estudos de projeto, as três etapas aparecem na horizontal e viram uma lista vertical no celular.

Sem sombras de cartões ou cantos arredondados no conteúdo. Priorizar espaço e linhas antes de contêineres com borda. Tags são pequenos elementos independentes e podem ter bordas.

## Componentes reutilizáveis

| Componente | Contrato | Uso |
| --- | --- | --- |
| `Eyebrow` | `children`, `className` | Contexto, capítulo e metadados |
| `DisplayTitle` | `title`, `accent`, `id`, `className` | Título em duas partes; a segunda usa azul |
| `Button` | `variant`, `disabled`, `onClick`, `icon` | Ações primárias e secundárias |
| `ChapterIndex` | `t`, `go`, `current`, `compact` | Sumário da capa e índice em diálogo |
| `DetailRows` | `rows`, `numbered` | Detalhes editoriais e etapas |
| `Tags` | `items` | Stack de um projeto |
| `Project` | `t`, `project`, `go` | Mesmo formato para os dois projetos atuais |

## Comportamento e acessibilidade

- Setas esquerda/direita e Page Up/Page Down navegam. Home/End vão aos extremos do deck.
- Botões desabilitados impedem sair dos limites do deck.
- PT/EN preserva a tela atual, muda o atributo `lang` e grava a preferência localmente quando disponível.
- Cada tela possui um endereço próprio e suporta o voltar/avançar do navegador.
- Foco visível azul, atalho de pular ao conteúdo e foco no título ao mudar de tela.
- Índice usa `dialog` nativo, foco contido e fechamento por Escape.
- Tela cheia usa a API nativa; navegadores sem suporte recebem uma mensagem recuperável.
- A preferência `prefers-reduced-motion` remove animações e transições.
- O celular usa uma composição de site com rolagem vertical; o desktop de referência usa uma tela por slide.

## Como estender

### Configurações da apresentação

O botão de ajustes no cabeçalho abre `SettingsDialog`, com PT/EN, seletor nativo de cor, campo hexadecimal de seis dígitos, sugestões de cores e restauração do azul original. A prévia é imediata. O idioma preserva a tela atual e o modal aberto.

A cor fica em `rg-presentation-accent` no armazenamento local. `src/lib/theme.js` valida o valor, mantém `#193CF5` como padrão e deriva hover, superfície suave e texto dos botões. O texto dos botões usa preto ou branco conforme o contraste; o hexadecimal escolhido é mantido nos destaques. O catálogo visual reflete os tokens ativos. Ao alterar a cor para uma marca, revise a legibilidade dos títulos sobre o marfim, especialmente para tons claros.

Edite tokens antes de criar valores locais. Reutilize `Project` para manter os dois estudos consistentes. Insira novos textos nos dois idiomas em `src/data/presentation.js`. Reserve azul para hierarquia e ações; mantenha apenas uma ação principal por tela. Os termos entre colchetes são conteúdo pendente, nunca dados reais.
