# Design QA — RG / Trajetória v0.1

## Currículo e projetos pessoais — 14/09/2026

- Conteúdo parcial do CV aplicado em PT/EN; fontes e lacunas documentadas em `docs/content-sources.md`.
- Convoca adicionada como quinto capítulo, antes do encerramento, com foco no apoio da IA e campos pendentes para exemplos reais.
- Navegação e acesso direto à nova página conferidos; oito testes passam e build concluído.
- Prévia atualizada aberta em uma nova aba após falha transitória de HMR ao adicionar o componente. A nova aba carrega sem erros de console.
- Layout da página Convoca revisado em desktop e 390×844, sem overflow horizontal. Projeto em inglês verificado em 1280×800 após ajuste de espaçamento: documento com 800px de altura.

final result: passed

## Atualização — configurações e cor de destaque

- Alteração solicitada: PT/EN passou para um modal de configurações no cabeçalho. A cor de destaque agora é configurável; o padrão continua `#193CF5`.
- O modal mantém a tipografia editorial, o marfim e as divisórias do sistema existente. Inclui idioma, seletor nativo, código hexadecimal, sugestões, prévia e restauração do azul.
- Verificação no navegador: idioma muda sem fechar o modal ou mudar o slide; entrada inválida mantém a última cor válida; setas dentro do campo não navegam pelo deck; Escape fecha e retorna o foco ao botão Configurações.
- Persistência: após recarregar, inglês e `#F2B705` foram mantidos. O botão amarelo apresentou texto preto. Depois dos testes, português e o azul padrão foram restaurados.
- Responsividade: modal inspecionado em 390 × 844; ocupa 358 × 723 px, inteiramente dentro da viewport. Evidência: `qa/settings-mobile.png`. Também inspecionado na largura normal do navegador integrado.
- `npm test`: sete testes passaram. `npm run build`: passou.
- Escopo visual: a nova configuração é uma extensão solicitada pelo usuário; o tema padrão mantém a composição e os tokens originais. Nenhum problema P0/P1/P2 conhecido nesta alteração.

## Referência e evidências

- Referência visual: `docs/design-reference.png`, primeira direção escolhida pelo usuário.
- Implementação: `http://127.0.0.1:5173/#/pt/inicio`.
- Estado comparado: capa, português, primeiro slide.
- Referência: 1586 × 992 pixels. Viewport CSS: 1586 × 992. Capturas da implementação: 1586 × 992 pixels; densidade efetiva de 1 pixel de saída por pixel CSS. Não foi necessário redimensionar a referência.
- Comparação inicial lado a lado: `qa/comparison-initial.jpg`.
- Comparação revisada lado a lado: `qa/comparison-final.jpg`.
- Comparações de regiões: `qa/comparison-typography.png` e `qa/comparison-navigation.png`.
- Captura final após o ajuste do ícone: `qa/cover-delivery.png`.
- Outras evidências: `qa/cover-en.png`, `qa/project-desktop.png`, `qa/project-mobile.png`, `qa/cover-mobile.png` e `qa/design-system.png`.

## Histórico da comparação e correções

1. [P2, resolvido] A capa inicial ultrapassava a altura de 992 px em 18 px. O título também estava mais largo que a referência. Foram reduzidos o tamanho do título de 7.7vw para 7.35vw e o espaçamento vertical da capa. A nova medição confirmou `scrollHeight: 992` e `scrollWidth: 1586`. A comparação revisada e os recortes confirmam a correção da composição.
2. [P2, resolvido] Em 1280 × 800, o sumário mantinha dimensões do desktop maior e deslocava o rodapé para fora da tela. Foi criada uma adaptação para janelas com altura de até 900 px. As dez telas foram percorridas; oito passaram imediatamente e os dois projetos ainda tinham 22 px de excesso.
3. [P2, resolvido] O excesso de 22 px nos dois projetos foi eliminado reduzindo espaçamentos do conteúdo e do bloco inferior. Nova inspeção de ambos confirmou `scrollHeight: 800`, `scrollWidth: 1280`, viewport de 1280 × 800. O conteúdo permaneceu completo.
4. [P3, resolvido] O ícone de tela cheia foi substituído por Phosphor CornersOut/CornersIn para acompanhar os cantos da referência.

## Superfícies de fidelidade

- **Fontes e tipografia:** Bodoni Moda Variable reproduz o contraste editorial dos títulos; Inter compõe a interface. As fontes são locais. A capa preserva as duas linhas e o destaque azul; os recortes foram inspecionados em conjunto com a referência. Pequenas diferenças de desenho das letras e de renderização entre o mock gerado e a fonte real são aceitáveis.
- **Espaçamento e layout:** mantidos cabeçalho com linha fina, título à esquerda, sumário à direita, numeração grande, dois projetos subordinados à empresa atual e rodapé com progresso. Em telas menores, o layout adota rolagem vertical e uma coluna.
- **Cores e tokens:** marfim, tinta escura, azul cobalto, cinza secundário e divisórias estão centralizados em `src/design-system/tokens.css` e apresentados no catálogo visual.
- **Imagens e ativos:** a referência é tipográfica e não exige fotografias ou ilustrações. O conteúdo é HTML editável e os ícones vêm de Phosphor. Nenhuma imagem da capa foi usada como substituto da interface.
- **Texto e conteúdo:** a capa mantém a redação da proposta. A tela adicional de resumo faz o próximo passo ser “Sobre mim”. Textos de carreira ainda não fornecidos ficam entre colchetes, em ambos os idiomas, conforme o escopo de estrutura da v0. Há exatamente dois projetos da AB InBev.

## Interações e verificação

- As dez telas foram percorridas no desktop em português e inglês; sem rolagem horizontal ou corte vertical em 1586 × 992. Evidências em `qa/desktop-pt-checks.json` e `qa/desktop-en-checks.json`.
- Todas as telas foram percorridas em 1280 × 800; os dois problemas de altura foram corrigidos e verificados novamente. `qa/laptop-checks.json` preserva a medição anterior à última correção, descrita acima.
- Versão móvel inspecionada em 390 × 844: capa, navegação pelo deck e estudo de projeto. O conteúdo longo usa rolagem vertical natural. A inspeção do projeto confirmou largura do documento de 390 px.
- Verificados: início, anterior/próximo, limites do deck, links de projetos, tecla de seta, troca PT/EN mantendo a tela, recarga preservando idioma e projeto, índice de capítulos, fechamento por Escape e modo de tela cheia.
- Catálogo do design system: navegação por seções, ação de exemplo com mensagem, seleção de projeto e retorno à tela anterior da apresentação.
- Console do navegador: nenhuma mensagem de erro ou aviso na inspeção final.
- `npm test`: quatro testes passaram, cobrindo rotas, idioma, limites e completude dos dados.
- `npm run build`: passou, incluindo fontes locais e saída estática em `dist/client`.

## Limites e refinamentos futuros

- A comparação visual considera a capa selecionada; as telas internas são extensões do mesmo sistema visual, pois não havia mockups específicos para elas.
- Os testes de navegador foram realizados no navegador integrado do Codex. Não foi executada uma matriz de navegadores externos.
- A aparência do conteúdo final deverá ser revisada após substituir os campos pendentes, especialmente títulos e nomes longos.
- O protótipo permanece local. Não houve publicação externa.

## Checklist final

- [x] Referência e implementação capturadas e comparadas.
- [x] Tipografia, layout, cores, ativos e conteúdo revisados.
- [x] Problemas P2 corrigidos e conferidos novamente.
- [x] Navegação, idiomas, responsividade e componentes verificados.
- [x] Build e testes aprovados.
- [x] Nenhum problema P0/P1/P2 conhecido pendente.
