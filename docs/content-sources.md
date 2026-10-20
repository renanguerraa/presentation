# Conteúdo do currículo

Fonte: `Resume - Renan Galan Guerra - Senior Software Engineer.pdf`, fornecido pelo usuário em 14/09/2026, página 1. O PDF é referência de conteúdo e não foi alterado.

## Informações incorporadas

- Perfil: engenheiro de software sênior, Campinas, e-commerce B2C, web, mobile e backend. Colaboração com Produto, Design e QA, decisões técnicas e mentoria.
- FATEC: Análise e Desenvolvimento de Sistemas, janeiro de 2019 a dezembro de 2021. A sobreposição entre graduação e ACCT foi obtida das datas do CV.
- ACCT Global: Software Engineer, agosto de 2020 a abril de 2022, aproximadamente 1 ano e 8 meses. Clientes, stack, arquitetura, testes A/B, deploys, contribuições open source, ebook e comitê de diversidade.
- AB InBev: Software Engineer desde maio de 2022. O resumo profissional usa a senioridade do cabeçalho do CV; não foi inventada uma data de promoção. Em 16/10/2026, o usuário definiu o resumo da atuação geral em produtos B2C web, mobile e backend com contribuições em arquitetura, desenvolvimento, observabilidade, experimentação e dados; pediu substituir “entrega em produção” por “dados” e retirar o complemento sobre experiência do usuário.
- Zé Delivery: aproximadamente 1 ano e 8 meses, correção de débito técnico de cache e redução de cerca de 4 milhões de requisições por semana.
- O artigo de Renan no Medium detalha que a redução veio da revisão das queries em React Query, com configuração das chaves e de `staleTime`; os testes compararam semanas com volume de sessões equivalente e totalizaram quase 4 milhões de requisições a menos ao backend.
- Zé Delivery: os momentos começaram em maio de 2022 (Seller), janeiro de 2023 (Consumer · Sampling) e setembro de 2023 (Seller · Entrega agendada), conforme informado pelo usuário.
- TaDa Delivery: Checkout começou em janeiro de 2024 e Omnichannel em março de 2026, conforme informado pelo usuário. A contribuição via MCP e a redução de pedidos com erro foram fornecidas posteriormente e estão registradas abaixo.
- TaDa Delivery: início no começo de 2024, conforme informado pelo usuário.
- Dados públicos usados nas descrições: o [Relatório Anual 2024 da AB InBev](https://db.srnav.com/storage/v1/object/public/document-pdfs/05f42eb7-e16f-4824-adec-f4d9ca16443f.pdf) informa que o Zé Delivery atende mais de 9 milhões de consumidores por ano e que o TaDa Delivery alcançou mais de 1 milhão de consumidores em 11 países. A [página institucional da AB InBev sobre o TaDa](https://www.ab-inbev.com/news-media/news-stories/tada-delivery-the-magic-behind-ab-inbevs-first-global-direct-to-consumer-platform/) descreve a proposta de entrega em até 30 minutos.
- As tecnologias nos dois projetos estão identificadas como stack da AB InBev: o CV não discrimina a stack de cada projeto.
- A redução de falhas no envio de pedidos de 3,34% para 0,38% no principal país e a atuação em aplicação presente em mais de 10 países aparecem no resumo da AB InBev, sem atribuição a um projeto específico.

## Ainda falta complementar

- Convoca: aplicativo para criar e encontrar partidas esportivas próximas, convidar pessoas e confirmar presença. Stack informada pelo usuário: React Native e React.js no frontend mobile e web; API em Node.js com Prisma; PostgreSQL e Supabase para banco de dados e autenticação. Hospedagem: banco no Supabase, API no Google Cloud e site institucional no Firebase. O currículo não descreve o projeto.
- A marca da Convoca usa o arquivo local `public/brands/convoca-logo-ios.png`, fornecido pelo usuário. As explicações de features aparecem junto às capturas correspondentes no carrossel.
- Na busca por partidas próximas, o celular envia latitude e longitude à API; PostgreSQL com PostGIS usa índice geográfico, raio padrão de 15 km, cálculo de distância, ordenação e paginação. A resposta informa a distância e se o usuário já participa da partida.
- As notificações da Convoca podem ser personalizadas por um ou mais esportes e por raio de 5, 10 ou 15 km. Ao salvar, o app registra a localização usada na busca, habilita o dispositivo e avisa sobre novas partidas compatíveis na área escolhida. As preferências ficam editáveis nos ajustes do perfil.
- Na criação de partidas, o usuário escolhe esporte, data, detalhes e local no mapa. O endereço gera latitude e longitude para que a partida apareça corretamente na descoberta por proximidade.
- Na área My Account, o usuário acompanha total de jogos, partidas criadas, taxa de participação e esportes mais frequentes para obter uma visão rápida da atividade na plataforma.
- Cada partida possui um chat exclusivo com histórico de mensagens para os participantes combinarem detalhes, além de recursos para bloquear jogadores e denunciar conteúdo inadequado.
- A IA participou da Convoca desde a etapa inicial: Miro AI para os primeiros fluxos e protótipo; Codex para planejar estrutura de dados e gerar documentação de contexto; skill de Product Design para finalizar telas, regras e documentação das features; desenvolvimento do app e das APIs guiado por IA; e apoio posterior para hospedagem, registro da marca no INPI e lançamento nas lojas. Em 20/10/2026, o usuário pediu incluir SDD (Spec-Driven Development) na etapa de desenvolvimento, conectando especificações e critérios de aceite ao planejamento das tarefas, à implementação com IA e à validação das entregas.
- Principais aprendizados de IA na Convoca: contexto reduz custo e aumenta precisão; autonomia precisa de critérios e validação antes de testes e QA; e conhecimentos recorrentes devem viver no projeto por meio de scripts do `package.json` ou documentação.
- As cinco capturas da App Store fornecidas pelo usuário foram copiadas para `public/brands/convoca-ios-01.png` até `convoca-ios-05.png` e aparecem em um carrossel abaixo da marca.

- O motivo da saída da ACCT e as expectativas ao entrar na AB InBev foram fornecidos posteriormente e estão registrados abaixo.
- Marcos adicionais da trajetória e responsabilidades por projeto.
- A contribuição na redução aproximada de 4% para 0,3% de pedidos com erro foi confirmada no TaDa; o período de medição permanece sem detalhamento. Métricas de alcance público não são apresentadas como resultado individual.
- As stacks específicas de Zé Delivery e TaDa Delivery foram definidas pelo usuário em AGENTS.md. Resultados adicionais que não constam no CV foram registrados nas informações fornecidas abaixo.
- A promoção a Júnior na ACCT Global aparece como fev./Feb. 2021, conforme informado pelo usuário. A promoção a Pleno na AB InBev aparece como mai./May 2023, inferida a partir do início em maio de 2022; confirmar o mês exato antes da versão final.

## Informações pessoais fornecidas pelo usuário

- Software Engineer com 6 anos de experiência, principalmente em projetos B2C.
- Nascimento em 07/07/2001; a idade é calculada no frontend.
- Viveu em Atibaia, São Paulo, até se mudar para Campinas no início de 2025, conforme confirmação do usuário em 15/10/2026.
- Hobbies: jogos online, cozinhar, musculação e viagens. Atualmente joga com menos frequência por causa da rotina adulta.
- Escolheu a área de TI após considerar uma graduação em engenharia; o interesse por exatas e o contato precoce com tecnologia por meio dos jogos influenciaram a decisão.
- Começou a estagiar em agosto de 2020 durante a graduação, experiência que reforçou sua vontade de crescer na área de desenvolvimento.
- No primeiro semestre, confundiu Algoritmos com logaritmos e teve dificuldade nas primeiras aulas de laboratório; ao compreender lógica de programação, passou a gostar da área.
- Ao sair da ACCT Global, buscava acompanhar o impacto do próprio código no usuário final; a troca de clientes aproximadamente a cada três meses dificultava esse acompanhamento. Conforme redação aprovada pelo usuário em 16/10/2026, o trabalho se concentrava na entrega dos projetos, com pouco espaço para avaliar o impacto das funcionalidades na experiência do usuário. Queria uma empresa de produto para usar dados, entender os resultados das entregas e participar da evolução das soluções ao longo do tempo. O slide apresenta esses motivos na ordem contexto → dificuldade → mudança desejada.
- Na AB InBev, começou em Seller na plataforma de gestão do ponto de venda, atuando em estoque e pagamento online. Depois foi para Consumer entregar o Sampling durante quase oito meses, permitindo experimentar bebidas por R$ 0,01. Em seguida voltou para Seller em um projeto de três meses para desenvolver e apoiar Produto na experiência de entrega agendada, conforme correção do usuário em 15/10/2026.
- No TaDa Delivery, permaneceu quase dois anos e meio no time Consumer Checkout, evoluindo do entendimento do framework e da arquitetura BFF para a liderança técnica, com destaque para observabilidade e apoio constante ao time de Produto com dados de negócio. Depois passou ao time Consumer Omnichannel para aplicar os padrões de engenharia do Checkout, apoiar arquitetura, liderança técnica e observabilidade, e estruturar e compartilhar com o time práticas de IA, como Cursor Rules, baseadas em contextos mais precisos, com economia de tokens e melhor direcionamento das tarefas.
- No TaDa Delivery, o problema foi identificado pela análise dos dados no Amplitude. Com apoio de IA, o time usou um MCP conectado ao New Relic para mapear os erros e o Jira para facilitar a criação das tarefas de correção. Esse trabalho contribuiu para reduzir a taxa de pedidos com erro de aproximadamente 4% para 0,3%. Em 20/10/2026, o usuário esclareceu que não participou da criação do MCP; não há confirmação de que o MCP integrava Amplitude, New Relic e Jira.

O conteúdo foi resumido em português e inglês para a apresentação. Campos entre colchetes indicam informações ainda não fornecidas. Não foram incluídos telefone ou e-mail em telas públicas.
