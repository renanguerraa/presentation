# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Decisões deste projeto

- Usar Renan Galan Guerra como nome completo na apresentação e nos metadados.
- Preferir títulos diretos e específicos de cada etapa; evitar clichês sobre trajetória, ciclos e construção. O botão de retorno no encerramento usa “Início” / “Home”.
- A revisão editorial de 15/10/2026 foi aprovada em PT/EN, com duas exceções: preservar todo o encerramento atual (“O próximo capítulo está em construção.” e sua tradução) e o título da apresentação da Convoca (“Transformamos vontade de jogar em partidas reais” / “We turn the desire to play into real matches”). Essas escolhas prevalecem sobre a preferência geral por títulos diretos.
- O acesso ao Design System fica dentro do modal de configurações; não exibir o atalho no rodapé nem no índice de capítulos.
- Não exibir a dica de navegação por setas no rodapé. A seção Sobre mim usa o título “Eu, além do código.”, com tradução em inglês.
- O usuário escolheu a primeira direção do Product Design. Fonte visual: `docs/design-reference.png`.
- Preservar o tema editorial claro: marfim, preto, azul cobalto, Bodoni Moda e Inter.
- O usuário pediu Vite, design system reutilizável e v0 com foco na estrutura, sem priorizar conteúdo final.
- Manter PT e EN para toda a experiência, preservando a tela atual ao alternar.
- Cinco capítulos: sobre mim, faculdade, ACCT Global, AB InBev e projetos pessoais. A empresa atual deve ter exatamente dois projetos. Projetos pessoais fica antes do encerramento e apresenta a Convoca a partir do funcionamento do aplicativo.
- O slide da Convoca apresenta brevemente o funcionamento do aplicativo, a stack e a hospedagem, sem descrições para cada frente. Não exibir a sequência numerada de uso, “Com apoio de IA”, a introdução genérica nem placeholders. Consolidar a stack em: frontend mobile e web com React Native e React.js; backend com Node.js e Prisma; banco de dados e autenticação com PostgreSQL e Supabase. Hospedagem: banco no Supabase, API no Google Cloud e site institucional no Firebase.
- Exibir `convoca-logo-ios.png` ao lado do título grande da Convoca. Não exibir um bloco separado de “Principais features”.
- No carrossel da Convoca, a foto 01 exibe ao lado a explicação de “Encontrar partidas próximas”, cobrindo localização enviada à API, PostgreSQL/PostGIS, raio padrão de 15 km, ordenação, paginação e participação do usuário.
- No carrossel da Convoca, a foto 02 exibe ao lado a explicação de “Criar partida”, cobrindo esporte, data, detalhes, seleção do local no mapa e geração de latitude e longitude para a descoberta por proximidade.
- No carrossel da Convoca, a foto 03 exibe ao lado a explicação de “My Account”, com total de jogos, partidas criadas, taxa de participação e esportes mais frequentes.
- No carrossel da Convoca, a foto 04 exibe ao lado a explicação de “Notificações personalizadas”, cobrindo seleção de esportes, raios de 5, 10 ou 15 km, localização, avisos de novas partidas compatíveis e edição das preferências no perfil.
- No carrossel da Convoca, a foto 05 exibe ao lado a explicação de “Chat da partida”, cobrindo combinação de detalhes, histórico de mensagens, bloqueio de jogadores e denúncia de conteúdo inadequado.
- Abaixo da apresentação da Convoca, exibir a seção “IA desde o momento zero” como uma jornada em cinco etapas: protótipo inicial com Miro AI; estrutura de dados e documentação de contexto com Codex; telas e regras finais com uma skill de Product Design; desenvolvimento do app e APIs guiado por IA; e apoio em hospedagem, registro no INPI e lançamento nas lojas.
- Depois da jornada, exibir “Principais aprendizados sobre IA” em três pontos: “Contexto reduz custo e aumenta precisão”, “Autonomia precisa de critérios” e “Conhecimento recorrente deve viver no projeto”.
- O título dessa seção usa um tom leve: “Mais contexto. Tokens não são baratos.” / “More context. Tokens aren't cheap.”
- Nas explicações ao lado das capturas da Convoca, exibir diretamente o título e o texto, sem o rótulo “Feature em destaque”.
- A logo da Convoca usa uma sombra curta e discreta.
- Abaixo do título e da logo da Convoca, exibir em carrossel automático as cinco capturas da App Store armazenadas localmente como `convoca-ios-01.png` a `convoca-ios-05.png`, com setas e respeito a movimento reduzido.
- O carrossel de projetos da ACCT usa transição suave de 800ms entre marcas e respeita movimento reduzido.
- As capturas do carrossel da Convoca usam raio de 22px; em tela cheia, usam um raio maior de 40px.
- Ao clicar em uma captura do carrossel da Convoca, abrir a imagem em um modal de tela cheia com overlay escuro, fechamento e navegação entre as imagens.
- Não inventar dados da carreira. Preencher somente informações fornecidas pelo usuário; usar colchetes enquanto pendentes.
- Em Projetos e resultados da ACCT, apresentar imagens das oito marcas do currículo em carrossel, com avanço automático e setas, sem botão de pausa/continuação, respeitando movimento reduzido.
- O carrossel de projetos da ACCT é uma faixa infinita com três marcas visíveis; a ativa fica centralizada, sem linha inferior, enquanto as laterais permanecem coloridas com blur suave.
- A experiência na ACCT Global ocupa um único slide. O título “ACCT Global.” fica em uma linha e não repete o nome da empresa abaixo. “Projetos participados” aparece imediatamente abaixo de “Software Engineer · E-commerce”. Na coluna de conteúdo, a ordem é “O contexto” → “Meu papel” → “Conquistas”; as conquistas destacam a contribuição para o projeto open source da VTEX e a criação do ebook. A stack permanece junto da trajetória.
- O bloco “Tempo de casa / Período” da ACCT Global não usa divisor superior.
- A transição da ACCT Global para a AB InBev segue a ordem contexto → dificuldade → mudança desejada, com os títulos “Foco na entrega”, “Troca frequente de clientes” e “Continuidade em um produto”, e traduções em inglês. Explica a concentração na entrega dos projetos, o pouco espaço para avaliar o impacto na experiência do usuário, a troca de clientes em ciclos de cerca de três meses e a busca por uma empresa de produto para usar dados, entender resultados e participar da evolução das soluções. Redação aprovada pelo usuário em 16/10/2026.
- Na stack de Projetos e resultados, manter React.js, TypeScript e GraphQL, com VTEX.IO por último; não exibir Jest ou Git nessa lista.
- O resumo da AB InBev deve apresentar a atuação geral em produtos B2C e aplicações web, mobile e backend, destacando contribuições em arquitetura, desenvolvimento, observabilidade, experimentação e dados, conforme solicitado em 16/10/2026. Nesse resumo, não usar “entrega em produção” nem o complemento “com foco na experiência do usuário”. Não usar as métricas de pedidos e países como resumo principal.
- As páginas da ACCT Global e da AB InBev não exibem barras de trajetória profissional.
- A etapa da AB InBev exibe os logos de Zé Delivery e TaDa Delivery ao lado dos nomes dos projetos. O logo do TaDa é armazenado localmente a partir do arquivo oficial para evitar quebra por dependência externa.
- No resumo da AB InBev, “Zé Delivery” permanece em uma única linha e exibe “Cerca de 1 ano e 8 meses de atuação”.
- No slide detalhado do Zé Delivery, “Zé Delivery.” permanece em uma única linha e o período “Cerca de 1 ano e 8 meses” não é exibido.
- Os três momentos do slide detalhado do Zé Delivery são: chegada em Seller com estoque e pagamento online; mudança para Consumer para entregar o Sampling durante quase oito meses; e retorno a Seller para a entrega agendada em um projeto de três meses, conforme correção do usuário.
- Os títulos desses momentos seguem o padrão direto “área · iniciativa”: “Seller · Gestão do ponto de venda”, “Consumer · Sampling” e “Seller · Entrega agendada”.
- Exibir o início de cada momento do Zé Delivery: 05/22 em Seller, 01/23 em Consumer · Sampling e 09/23 em Seller · Entrega agendada.
- No slide do TaDa, “TaDa Delivery.” fica em uma única linha. Os momentos são “Consumer · Checkout”, cobrindo quase dois anos e meio até a liderança técnica e evolução da observabilidade, e “Consumer · Omnichannel”, com aplicação dos padrões do Checkout, apoio à arquitetura, liderança técnica e observabilidade.
- Exibir o início de cada momento do TaDa Delivery: 01/2024 em Consumer · Checkout e 03/2026 em Consumer · Omnichannel.
- No slide detalhado do TaDa Delivery, não exibir um período geral; manter as datas apenas nos momentos de Checkout e Omnichannel.
- No momento Consumer · Checkout do TaDa, destacar a evolução da observabilidade e o apoio constante ao time de Produto com dados de negócio.
- No momento Consumer · Omnichannel do TaDa, destacar que Renan estruturou e compartilhou com o time práticas de IA para o desenvolvimento, usando Cursor Rules como exemplo de contexto preciso para economizar tokens e direcionar melhor as tarefas.
- A conquista em destaque do TaDa apresenta o MCP com IA que integrava New Relic, Amplitude e Jira para cruzar dados, rastrear débitos técnicos e reduzir a taxa de pedidos com erro de aproximadamente 4% para 0,3%.
- Nos slides detalhados de Zé Delivery e TaDa Delivery, usar apenas “Stack” como título. No Zé, não exibir NestJS; no TaDa, não exibir React.js nem React Native.
- A conquista do Zé Delivery explicita “≈ 4 milhões de requests a menos por semana”, explica o uso de chaves de cache e `staleTime` no React Query e oferece um link para o artigo de Renan no Medium.
- No mobile, reduzir um pouco a fonte de “Zé Delivery” e “TaDa Delivery” no slide 06, mantendo os nomes em uma linha.
- A seção Sobre mim apresenta Renan como Software Engineer com 6 anos de experiência, principalmente em projetos B2C; menciona a mudança de Atibaia para Campinas no início de 2025, confirmada pelo usuário, e os hobbies jogos online, cozinhar, musculação e viagens.
- Exibir a idade ao lado do nome na seção Sobre mim, calculada no frontend a partir da data de nascimento 07/07/2001.
- Na faculdade, Renan conta que sempre gostou de exatas, considerou seguir engenharia e escolheu TI após o contato precoce com tecnologia por meio dos jogos.
- Durante a graduação, Renan começou a estagiar em agosto de 2020, o que reforçou sua vontade de crescer na área de desenvolvimento.
- A experiência marcante da faculdade usa o título “De logaritmos a algoritmos” e conta como a dificuldade inicial se transformou em interesse por lógica de programação.
- O carrossel usa o rótulo “Projetos participados”, nome pequeno junto às setas e espaço entre o cabeçalho/contador e as imagens. Preferir logotipos transparentes, sem painéis escuros; Vivara em SVG nítido.
- Os slides não exibem CTAs ou abas de projeto no conteúdo central; a navegação principal acontece pelas setas do rodapé. Cabeçalho, capítulo e rodapé ficam fixos no viewport, com rolagem somente dentro da área do slide.
- A barra de rolagem interna segue o design system: trilho discreto sobre o marfim e indicador fino na cor de destaque configurável, incluindo o modal de configurações.
- Na navegação horizontal de capítulos, alinhar verticalmente o número e o texto de cada item.
- O currículo fornecido em 14/09/2026 foi incorporado parcialmente em PT/EN. Consultar `docs/content-sources.md` para dados confirmados e lacunas; não inferir motivos de saída, promoções, datas exatas ou atribuições de métricas por projeto.
- Configurações no cabeçalho reúnem idioma e cor de destaque. O azul #193CF5 é o padrão; a cor pode ser personalizada para cada empresa e deve persistir localmente. Atualizar os tokens derivados, preservando o fundo marfim e a tipografia.
- A aba do navegador usa um favicon com “RG.” em Bodoni Moda, azul cobalto e marfim.
