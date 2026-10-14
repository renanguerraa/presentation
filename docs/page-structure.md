# Estrutura da apresentação

O deck tem cinco capítulos, onze telas e uma página auxiliar do design system.

| Tela | Rota PT | Estrutura |
| --- | --- | --- |
| 01 — Abertura | `#/pt/inicio` | Capa editorial, nome, assinatura, sumário e início |
| 02 — Sobre mim | `#/pt/sobre` | Resumo, motivação e forma de trabalhar |
| 03 — Faculdade | `#/pt/faculdade` | Curso, instituição, período e três marcos da formação |
| 04 — ACCT Global | `#/pt/primeiro-emprego` | Empresa, cargo, tempo de casa, período, contexto e papel |
| 05 — Projetos e conquistas | `#/pt/primeiros-projetos` | Projeto em destaque, contribuição, stack, resultado e aprendizado |
| 06 — Transição | `#/pt/transicao` | Aprendizados, motivo da saída e próximo desafio |
| 07 — Empresa atual | `#/pt/ab-inbev` | Visão geral da AB InBev, cargo, tempo de casa e acesso aos dois projetos |
| 08 — Projeto 01 | `#/pt/projeto-01` | Contexto, período, entrada, evolução, impacto, stack e conquista |
| 09 — Projeto 02 | `#/pt/projeto-02` | Mesma estrutura do primeiro projeto para facilitar comparação |
| 10 — Projetos pessoais | `#/pt/projetos-pessoais` | Convoca, apoio da IA no desenvolvimento, decisões e aprendizados |
| 11 — Encerramento | `#/pt/encerramento` | Fechamento e retorno ao início |
| Design system | `#/pt/design-system` | Tipografia, paleta, espaçamento, componentes e princípios |

Substitua `/pt/` por `/en/` para abrir a mesma tela em inglês. As rotas preservam identificadores estáveis; a apresentação inteira e os controles são traduzidos.

## Organização

- Dados e traduções: `src/data/presentation.js`.
- Ordem de telas: `slideOrder`; vínculo com capítulos: `slideChapters`.
- Componentes de página: `src/components/Slides.jsx`.
- Roteamento e estado: `src/App.jsx` e `src/lib/navigation.js`.
- Catálogo visual: `src/components/DesignSystem.jsx`.
- Componentes básicos: `src/components/ui.jsx`.
- Tokens: `src/design-system/tokens.css`.
- Layout e responsividade: `src/styles.css`.

O currículo já foi incorporado parcialmente. As fontes e lacunas estão em `docs/content-sources.md`. Colchetes marcam somente informações ainda não fornecidas. A Convoca foi incluída a pedido do usuário, com foco na ajuda da IA durante o desenvolvimento; os exemplos concretos ainda precisam ser complementados.
