export const profile = {
  name: "Renan Galan Guerra",
  initials: "RG",
  birthDate: "2001-07-07",
};

export const slideOrder = [
  "inicio",
  "sobre",
  "faculdade",
  "primeiro-emprego",
  "transicao",
  "ab-inbev",
  "projeto-01",
  "projeto-02",
  "projetos-pessoais",
  "encerramento",
];
export const slideChapters = [0, 0, 1, 2, 2, 3, 3, 3, 4, 4];

const pt = {
  settings: {
    title: "Configurações",
    presentation: "Apresentação",
    description: "Escolha o idioma e a cor de destaque.",
    language: "Idioma",
    color: "Cor de destaque",
    colorHelp: "Escolha uma cor ou cole seu código hexadecimal.",
    picker: "Escolher cor de destaque",
    hex: "Código hexadecimal",
    invalid: "Use um código hexadecimal de seis caracteres, como #193CF5.",
    presets: "Sugestões de cores",
    defaultColor: "Azul padrão",
    preview: "Prévia",
    previewText: "Uma apresentação.",
    previewAccent: "Com a sua cor.",
    saved: "Idioma e cor são salvos automaticamente neste navegador.",
    reset: "Restaurar azul padrão",
    done: "Concluído",
  },
  brand: "Trajetória profissional",
  chapter: "Capítulo",
  chapters: "Capítulos",
  language: "Idioma da apresentação",
  fullscreen: "Entrar em tela cheia",
  exitFullscreen: "Sair da tela cheia",
  fullscreenError:
    "Tela cheia indisponível neste navegador. Você pode ampliar a janela para apresentar.",
  home: "Voltar ao início",
  previous: "Slide anterior",
  next: "Próximo slide",
  nextLabel: "Próximo:",
  start: "Começar apresentação",
  restart: "Voltar ao início",
  skip: "Pular para o conteúdo",
  close: "Fechar",
  index: "Ver capítulos",
  back: "Voltar à apresentação",
  designSystem: "Design system",
  progress: "Progresso da apresentação",
  sample: "Conteúdo ilustrativo",
  slideNames: [
    "Abertura",
    "Sobre mim",
    "Faculdade",
    "ACCT Global",
    "Da ACCT à AB InBev",
    "AB InBev",
    "Zé Delivery",
    "TaDa Delivery",
    "Projetos pessoais",
    "Encerramento",
  ],
  nav: [
    { number: "01", title: "Sobre mim", target: "sobre" },
    {
      number: "02",
      title: "Faculdade",
      target: "faculdade",
    },
    { number: "03", title: "ACCT Global", target: "primeiro-emprego" },
    { number: "04", title: "AB InBev", target: "ab-inbev" },
    { number: "05", title: "Projetos pessoais", target: "projetos-pessoais" },
  ],
  hero: {
    first: "Sobre mim.",
    second: "Meu",
    accent: "trabalho.",
    subtitle: "Minha experiência em software e os projetos em que atuei.",
  },
  about: {
    title: "Eu, além",
    accent: "do código.",
    ageUnit: "anos",
    intro:
      "Sou Software Engineer com 6 anos de experiência, principalmente em projetos B2C.",
    rows: [
      [
        "ONDE VIVO",
        "Sempre morei em Atibaia, São Paulo. Desde o início de 2025, moro em Campinas.",
      ],
      [
        "HOBBIES",
        "Gosto de jogos online, cozinhar, musculação e viagens. Hoje, jogo com menos frequência por causa da rotina.",
      ],
    ],
  },
  college: {
    title: "Minha",
    accent: "formação.",
    intro:
      "Análise e Desenvolvimento de Sistemas · FATEC",
    period: "Janeiro de 2019 — dezembro de 2021",
    steps: [
      [
        "A escolha do curso",
        "Sempre gostei de exatas e considerei cursar engenharia. O contato com tecnologia por meio dos jogos me levou a escolher TI.",
      ],
      [
        "Primeiro estágio",
        "Comecei a estagiar em agosto de 2020, ainda na graduação. A experiência reforçou minha vontade de crescer como desenvolvedor.",
      ],
      [
        "De logaritmos a algoritmos",
        "No primeiro semestre, confundi Algoritmos com logaritmos e tive dificuldade nas primeiras aulas. Quando a lógica de programação começou a fazer sentido, passei a gostar da área.",
      ],
    ],
  },
  firstJob: {
    title: "ACCT",
    accent: "Global.",
    company: "ACCT Global",
    role: "Software Engineer · E-commerce",
    meta: [
      ["TEMPO DE CASA", "Cerca de 1 ano e 8 meses"],
      ["PERÍODO", "Ago. 2020 — abr. 2022"],
    ],
    rows: [
      [
        "O contexto",
        "Trabalhei em projetos de e-commerce para marcas de diferentes segmentos, em frentes simultâneas e em colaboração com Produto, QA e Design.",
      ],
      [
        "Meu papel",
        "Atuei na arquitetura de funcionalidades, no desenvolvimento frontend, em testes A/B, deploys e mentoria.",
      ],
      [
        "Conquistas",
        "Contribuí para o projeto open source da VTEX e escrevi um ebook sobre boas práticas para aplicações React.js customizadas.",
      ],
    ],
    carousel: {
      title: "Projetos participados",
      carousel: "carrossel",
      previous: "Projeto anterior",
      next: "Próximo projeto",
    },
    stack: "Stack",
    technologies: ["React.js", "TypeScript", "GraphQL", "VTEX.IO"],
  },
  transition: {
    title: "Por que",
    accent: "mudei de empresa.",
    rows: [
      [
        "Foco na entrega",
        "O trabalho se concentrava na entrega dos projetos, com pouco espaço para avaliar o impacto das funcionalidades na experiência do usuário.",
      ],
      [
        "Troca frequente de clientes",
        "Eu mudava de cliente em ciclos de cerca de três meses, o que dificultava acompanhar como as soluções eram usadas e o que poderia melhorar.",
      ],
      [
        "Continuidade em um produto",
        "Queria atuar em uma empresa de produto para usar dados, entender os resultados das minhas entregas e participar da evolução das soluções ao longo do tempo.",
      ],
    ],
    destination: "PRÓXIMA EMPRESA",
  },
  current: {
    title: "Meu trabalho",
    accent: "na AB InBev.",
    current: "EMPRESA ATUAL",
    intro: "AB InBev",
    role: "Software Engineer · Desde maio de 2022",
    summary:
      "Contribuo para a evolução de produtos de e-commerce B2C em aplicações web, mobile e backend. Minha atuação abrange arquitetura, desenvolvimento, observabilidade, experimentação e dados.",
    projects: [
      ["Zé Delivery", "Cerca de 1 ano e 8 meses de atuação."],
      ["TaDa Delivery", "No projeto desde janeiro de 2024."],
    ],
    action: "Conhecer o projeto",
  },
  projects: [
    {
      title: "Zé",
      accent: "Delivery.",
      description:
        "Produto de entrega de bebidas da AB InBev no Brasil, com frentes para consumidores e pontos de venda.",
      period: "",
      stages: [
        [
          "Seller · Gestão do ponto de venda",
          "Desenvolvi funcionalidades de estoque e pagamento online na plataforma de gestão dos pontos de venda.",
          "Início · 05/22",
        ],
        [
          "Consumer · Sampling",
          "Passei para Consumer para desenvolver o Sampling, que permitia experimentar bebidas por R$ 0,01. Atuei no projeto por quase oito meses.",
          "Início · 01/23",
        ],
        [
          "Seller · Entrega agendada",
          "Voltei a Seller para desenvolver a entrega agendada em parceria com Produto, em um projeto de três meses.",
          "Início · 09/23",
        ],
      ],
      stackLabel: "STACK",
      technologies: [
        "React.js",
        "React Native",
        "TypeScript",
        "GraphQL",
        "Jest",
      ],
      achievement: "≈ 4 milhões de requests a menos por semana",
      evidence: "Ajustamos as chaves de cache e o staleTime no React Query para reutilizar respostas. Em testes que compararam semanas com volume equivalente de sessões, foram quase 4 milhões de requisições a menos ao backend.",
      article: {
        label: "Como reduzimos requisições com React Query",
        url: "https://medium.com/@renanguerraa_/como-utilizamos-do-cache-a-ponto-de-diminuir-as-requests-em-4-milh%C3%B5es-no-seu-z%C3%A9-ae77450fbd33",
      },
    },
    {
      title: "TaDa",
      accent: "Delivery.",
      description:
        "Plataforma global da AB InBev para compra e entrega de bebidas ao consumidor.",
      period: "",
      stages: [
        [
          "Consumer · Checkout",
          "Atuei por quase dois anos e meio no Checkout, da adaptação ao framework e à arquitetura BFF até a liderança técnica do time. Evoluí a observabilidade e apoiei Produto com dados de negócio.",
          "Início · 01/2024",
        ],
        [
          "Consumer · Omnichannel",
          "Passei a aplicar no Omnichannel os padrões de engenharia do Checkout, apoiando arquitetura, liderança técnica e observabilidade. Também estruturei e compartilhei práticas de IA, como Cursor Rules, para fornecer contexto preciso, reduzir o consumo de tokens e direcionar melhor as tarefas.",
          "Início · 03/2026",
        ],
      ],
      stackLabel: "STACK",
      technologies: [
        "NestJS",
        "TypeScript",
        "GraphQL",
        "Jest",
      ],
      achievement: "Pedidos com erro: de ≈ 4% para 0,3%",
      evidence:
        "Participei da criação de um MCP que integrava New Relic, Amplitude e Jira. Com apoio de IA, cruzamos dados para rastrear débitos técnicos na captura de dados e na engenharia. Esse trabalho contribuiu para reduzir a taxa de pedidos com erro de aproximadamente 4% para 0,3%.",
    },
  ],
  labels: {
    stack: "STACK",
    achievement: "CONQUISTA EM DESTAQUE",
    project: "Projeto",
    evolution: "Minha trajetória no projeto",
  },
  personal: {
    title: "Convoca.",
    logoAlt: "Logo da Convoca",
    carousel: {
      carouselLabel: "Telas do aplicativo Convoca",
      imageAlt: "Tela do aplicativo Convoca",
      expand: "Abrir imagem em tela cheia",
      close: "Fechar imagem",
      previous: "Tela anterior",
      next: "Próxima tela",
      slides: [
        {
          title: "Encontrar partidas próximas",
          description: "O app envia a latitude e a longitude do usuário à API. No PostgreSQL, o PostGIS usa um índice geográfico para buscar partidas em um raio padrão de 15 km. Os resultados vêm paginados, do mais próximo ao mais distante, com a distância em quilômetros e a indicação de participação do usuário.",
        },
        {
          title: "Criar partida",
          description: "Ao criar uma partida, o usuário define esporte, data e detalhes e escolhe o local no mapa. O endereço gera as coordenadas de latitude e longitude usadas na busca por partidas próximas.",
        },
        {
          title: "My Account",
          description: "A área My Account reúne total de jogos, partidas criadas, taxa de participação e esportes mais frequentes.",
        },
        {
          title: "Notificações personalizadas",
          description: "O usuário escolhe esportes e um raio de 5, 10 ou 15 km. O app salva a localização e habilita o dispositivo para avisar sobre novas partidas compatíveis na região. As preferências podem ser alteradas nos ajustes do perfil.",
        },
        {
          title: "Chat da partida",
          description: "O chat de cada partida permite combinar detalhes e consultar o histórico de mensagens. Os participantes também podem bloquear jogadores e denunciar conteúdo inadequado.",
        },
      ],
    },
    sectionLabel: "COMO FUNCIONA O APP",
    heading: "Transformamos vontade de jogar em partidas reais",
    description:
      "Na Convoca, você encontra partidas próximas, cria jogos, convida pessoas e confirma presença.",
    stackLabel: "STACK",
    stack: [
      ["Frontend mobile e web", "React Native e React.js"],
      ["Backend", "Node.js + Prisma"],
      ["Banco de dados e autenticação", "PostgreSQL e Supabase"],
    ],
    hostingLabel: "HOSPEDAGEM",
    hosting: [
      ["Banco de dados", "Supabase"],
      ["API", "Google Cloud"],
      ["Site institucional", "Firebase"],
    ],
    aiJourney: {
      label: "IA DESDE O MOMENTO ZERO",
      heading: "Da primeira ideia ao lançamento",
      intro: "Usei IA no protótipo, na documentação, no desenvolvimento e na preparação para o lançamento.",
      steps: [
        {
          tool: "Miro AI",
          title: "Fluxos e protótipo",
          description: "Usei o Miro AI para transformar a ideia em fluxos e em um primeiro protótipo visual.",
        },
        {
          tool: "Codex",
          title: "Dados e contexto",
          description: "Com o Codex, planejei a estrutura de dados e documentei o produto, as telas e as APIs para orientar as próximas etapas.",
        },
        {
          tool: "Skill de Product Design",
          title: "Telas e regras",
          description: "Refinei as telas com a skill de Product Design e consolidei as regras e a documentação de cada funcionalidade.",
        },
        {
          tool: "Desenvolvimento com IA",
          title: "Aplicativo e APIs",
          description: "Desenvolvi o aplicativo e as APIs com um fluxo guiado por IA, usando o contexto documentado nas etapas anteriores.",
        },
        {
          tool: "Produto e operação",
          title: "Preparação para o lançamento",
          description: "Usei IA para entender a hospedagem, o registro da marca no INPI e a publicação nas lojas.",
        },
      ],
    },
    aiLearnings: {
      label: "PRINCIPAIS APRENDIZADOS SOBRE IA",
      heading: "Mais contexto. Tokens não são baratos.",
      items: [
        {
          title: "Contexto reduz custo e aumenta precisão",
          description: "Documentação e regras claras reduzem explicações repetidas e ajudam a IA a tomar decisões alinhadas ao projeto.",
        },
        {
          title: "Autonomia precisa de critérios",
          description: "A autonomia começa com objetivo e critérios de aceite claros. Validar a direção da solução antes de automatizar testes e QA ajuda a evitar retrabalho e consumo desnecessário de tokens.",
        },
        {
          title: "Conhecimento recorrente deve viver no projeto",
          description: "Registre comandos e informações recorrentes em scripts do package.json ou na documentação. Assim, a IA se concentra no problema sem redescobrir como iniciar o projeto, testar ou consultar o ambiente.",
        },
      ],
    },
  },
  closing: {
    kicker: "A HISTÓRIA CONTINUA",
    title: "O próximo capítulo",
    accent: "está em construção.",
    text: "Obrigado por fazer parte desta conversa.",
    action: "Início",
  },
  ds: {
    title: "Base visual",
    accent: "da apresentação.",
    intro: "Tokens, tipografia e componentes usados nesta apresentação.",
    colorNames: {
      paper: "Fundo",
      ink: "Texto",
      muted: "Texto secundário",
      rule: "Divisórias",
      soft: "Destaque suave",
    },
    displayLabel: "Títulos",
    bodyLabel: "Texto corrido",
    labelLabel: "RÓTULO",
    foundations: "Fundamentos",
    type: "Tipografia",
    colors: "Cores",
    spacing: "Espaçamento",
    components: "Componentes",
    principles: "Princípios",
    display: "Títulos que contam histórias.",
    body: "Uma interface que deixa a história em primeiro plano.",
    button: "Ação principal",
    secondary: "Ação secundária",
    disabled: "Indisponível",
    sample: "Exemplo de componente",
    active: "Selecionado",
    message: "Componente acionado.",
    principlesList: [
      "A tipografia cria a hierarquia.",
      "O espaço organiza a narrativa.",
      "A cor de destaque orienta as ações.",
      "Cada tela apresenta uma ideia.",
    ],
  },
};

const en = {
  settings: {
    title: "Settings",
    presentation: "Presentation",
    description: "Choose the language and accent color.",
    language: "Language",
    color: "Accent color",
    colorHelp: "Choose a color or paste its hex code.",
    picker: "Choose accent color",
    hex: "Hex code",
    invalid: "Use a six-character hex code, such as #193CF5.",
    presets: "Suggested colors",
    defaultColor: "Default blue",
    preview: "Preview",
    previewText: "A presentation.",
    previewAccent: "With your color.",
    saved: "Language and color are saved automatically in this browser.",
    reset: "Restore default blue",
    done: "Done",
  },
  brand: "Professional journey",
  chapter: "Chapter",
  chapters: "Chapters",
  language: "Presentation language",
  fullscreen: "Enter fullscreen",
  exitFullscreen: "Exit fullscreen",
  fullscreenError:
    "Fullscreen is unavailable in this browser. You can expand the window to present.",
  home: "Back to the beginning",
  previous: "Previous slide",
  next: "Next slide",
  nextLabel: "Next:",
  start: "Start presentation",
  restart: "Back to the beginning",
  skip: "Skip to content",
  close: "Close",
  index: "View chapters",
  back: "Back to presentation",
  designSystem: "Design system",
  progress: "Presentation progress",
  sample: "Illustrative content",
  slideNames: [
    "Opening",
    "About me",
    "Education",
    "ACCT Global",
    "From ACCT to AB InBev",
    "AB InBev",
    "Zé Delivery",
    "TaDa Delivery",
    "Personal projects",
    "Closing",
  ],
  nav: [
    { number: "01", title: "About me", target: "sobre" },
    {
      number: "02",
      title: "Education",
      target: "faculdade",
    },
    { number: "03", title: "ACCT Global", target: "primeiro-emprego" },
    { number: "04", title: "AB InBev", target: "ab-inbev" },
    { number: "05", title: "Personal projects", target: "projetos-pessoais" },
  ],
  hero: {
    first: "About me.",
    second: "My",
    accent: "work.",
    subtitle: "My experience in software and the projects I’ve worked on.",
  },
  about: {
    title: "Me, beyond",
    accent: "the code.",
    ageUnit: "years old",
    intro:
      "I’m a Software Engineer with 6 years of experience, mainly working on B2C projects.",
    rows: [
      [
        "WHERE I LIVE",
        "I lived in Atibaia, São Paulo, my entire life. At the beginning of 2025, I moved to Campinas.",
      ],
      [
        "HOBBIES",
        "I enjoy online games, cooking, strength training and traveling. These days, I play less often because of my routine.",
      ],
    ],
  },
  college: {
    title: "My",
    accent: "education.",
    intro:
      "Systems Analysis and Development · FATEC",
    period: "January 2019 — December 2021",
    steps: [
      [
        "Choosing the degree",
        "I always enjoyed maths and science and considered studying engineering. My contact with technology through games led me to choose IT.",
      ],
      [
        "First internship",
        "I started my internship in August 2020, while still studying. The experience reinforced my desire to grow as a developer.",
      ],
      [
        "From logarithms to algorithms",
        "In my first semester, I confused algorithms with logarithms and struggled in the first classes. Once programming logic began to make sense, I started to enjoy the field.",
      ],
    ],
  },
  firstJob: {
    title: "ACCT",
    accent: "Global.",
    company: "ACCT Global",
    role: "Software Engineer · E-commerce",
    meta: [
      ["TIME AT COMPANY", "About 1 year and 8 months"],
      ["PERIOD", "Aug. 2020 — Apr. 2022"],
    ],
    rows: [
      [
        "The context",
        "I worked on e-commerce projects for brands across different sectors, contributing to concurrent workstreams in collaboration with Product, QA and Design.",
      ],
      [
        "My role",
        "I contributed to feature architecture, frontend development, A/B tests, deployments and mentoring.",
      ],
      [
        "Achievements",
        "I contributed to VTEX’s open source project and wrote an ebook about best practices for custom React.js applications.",
      ],
    ],
    carousel: {
      title: "Projects I worked on",
      carousel: "carousel",
      previous: "Previous project",
      next: "Next project",
    },
    stack: "Stack",
    technologies: ["React.js", "TypeScript", "GraphQL", "VTEX.IO"],
  },
  transition: {
    title: "Why I",
    accent: "changed companies.",
    rows: [
      [
        "Focus on delivery",
        "The work centered on delivering projects, with little room to assess how features affected the user experience.",
      ],
      [
        "Frequent client changes",
        "I moved between clients in roughly three-month cycles, which made it difficult to follow how solutions were used and what could be improved.",
      ],
      [
        "Continuity within a product",
        "I wanted to work at a product company where I could use data, understand the results of my work and help evolve solutions over time.",
      ],
    ],
    destination: "NEXT COMPANY",
  },
  current: {
    title: "My work",
    accent: "at AB InBev.",
    current: "CURRENT COMPANY",
    intro: "AB InBev",
    role: "Software Engineer · Since May 2022",
    summary:
      "I help evolve B2C e-commerce products across web, mobile and backend applications. My work spans architecture, development, observability, experimentation and data.",
    projects: [
      ["Zé Delivery", "About 1 year and 8 months on the project."],
      ["TaDa Delivery", "On the project since January 2024."],
    ],
    action: "Explore the project",
  },
  projects: [
    {
      title: "Zé",
      accent: "Delivery.",
      description:
        "AB InBev’s beverage delivery product in Brazil, with platforms for consumers and points of sale.",
      period: "",
      stages: [
        [
          "Seller · Point-of-sale management",
          "I developed inventory and online payment features for the point-of-sale management platform.",
          "Start · 05/22",
        ],
        [
          "Consumer · Sampling",
          "I moved to Consumer to develop Sampling, which let consumers try beverages for R$0.01. I worked on the project for almost eight months.",
          "Start · 01/23",
        ],
        [
          "Seller · Scheduled delivery",
          "I returned to Seller to build scheduled delivery in partnership with Product, on a project lasting three months.",
          "Start · 09/23",
        ],
      ],
      stackLabel: "STACK",
      technologies: [
        "React.js",
        "React Native",
        "TypeScript",
        "GraphQL",
        "Jest",
      ],
      achievement: "≈ 4 million fewer requests per week",
      evidence:
        "We adjusted cache keys and staleTime in React Query to reuse responses. Tests comparing weeks with equivalent session volumes showed nearly 4 million fewer backend requests.",
      article: {
        label: "How we reduced requests with React Query",
        url: "https://medium.com/@renanguerraa_/como-utilizamos-do-cache-a-ponto-de-diminuir-as-requests-em-4-milh%C3%B5es-no-seu-z%C3%A9-ae77450fbd33",
      },
    },
    {
      title: "TaDa",
      accent: "Delivery.",
      description:
        "AB InBev’s global platform for consumers to buy beverages and have them delivered.",
      period: "",
      stages: [
        [
          "Consumer · Checkout",
          "I spent almost two and a half years in Checkout, progressing from learning the framework and BFF architecture to providing technical leadership for the team. I improved observability and supported Product with business data.",
          "Start · 01/2024",
        ],
        [
          "Consumer · Omnichannel",
          "I began applying Checkout’s engineering standards in Omnichannel, supporting architecture, technical leadership and observability. I also structured and shared AI practices, such as Cursor Rules, to provide precise context, reduce token usage and better direct tasks.",
          "Start · 03/2026",
        ],
      ],
      stackLabel: "STACK",
      technologies: [
        "NestJS",
        "TypeScript",
        "GraphQL",
        "Jest",
      ],
      achievement: "Orders with errors: from ≈ 4% to 0.3%",
      evidence:
        "I helped build an MCP that integrated New Relic, Amplitude and Jira. With AI support, we cross-referenced data to trace technical debt in data collection and engineering. This work contributed to reducing the rate of orders with errors from approximately 4% to 0.3%.",
    },
  ],
  labels: {
    stack: "STACK",
    achievement: "FEATURED ACHIEVEMENT",
    project: "Project",
    evolution: "My journey in the project",
  },
  personal: {
    title: "Convoca.",
    logoAlt: "Convoca logo",
    carousel: {
      carouselLabel: "Convoca app screens",
      imageAlt: "Convoca app screen",
      expand: "Open image in full screen",
      close: "Close image",
      previous: "Previous screen",
      next: "Next screen",
      slides: [
        {
          title: "Find nearby matches",
          description: "The app sends the user’s latitude and longitude to the API. In PostgreSQL, PostGIS uses a geographic index to find matches within a default 15 km radius. Results are paginated and sorted from nearest to farthest, with the distance in kilometers and an indication of whether the user has joined.",
        },
        {
          title: "Create a match",
          description: "When creating a match, users set the sport, date and details, then choose a location on the map. The address generates latitude and longitude coordinates used to find nearby matches.",
        },
        {
          title: "My Account",
          description: "My Account brings together total games, matches created, participation rate and most-played sports.",
        },
        {
          title: "Personalized notifications",
          description: "Users choose sports and a radius of 5, 10 or 15 km. The app saves the location and enables the device to receive alerts about matching new games in the area. Preferences can be changed in profile settings.",
        },
        {
          title: "Match chat",
          description: "Each match’s chat lets participants coordinate details and view the message history. Participants can also block players and report inappropriate content.",
        },
      ],
    },
    sectionLabel: "HOW THE APP WORKS",
    heading: "We turn the desire to play into real matches",
    description:
      "With Convoca, you can find nearby matches, create games, invite people and confirm attendance.",
    stackLabel: "STACK",
    stack: [
      ["Mobile and web frontend", "React Native and React.js"],
      ["Backend", "Node.js + Prisma"],
      ["Database and authentication", "PostgreSQL and Supabase"],
    ],
    hostingLabel: "HOSTING",
    hosting: [
      ["Database", "Supabase"],
      ["API", "Google Cloud"],
      ["Institutional website", "Firebase"],
    ],
    aiJourney: {
      label: "AI FROM DAY ONE",
      heading: "From the first idea to launch",
      intro: "I used AI for prototyping, documentation, development and launch preparation.",
      steps: [
        {
          tool: "Miro AI",
          title: "Flows and prototype",
          description: "I used Miro AI to turn the idea into flows and a first visual prototype.",
        },
        {
          tool: "Codex",
          title: "Data and context",
          description: "With Codex, I planned the data structure and documented the product, screens and APIs to guide the next stages.",
        },
        {
          tool: "Product Design skill",
          title: "Screens and rules",
          description: "I refined the screens with the Product Design skill and consolidated the rules and documentation for each feature.",
        },
        {
          tool: "AI-guided development",
          title: "App and APIs",
          description: "I developed the app and APIs through an AI-guided workflow, using the context documented in the previous stages.",
        },
        {
          tool: "Product and operations",
          title: "Launch preparation",
          description: "I used AI to understand hosting, trademark registration with INPI and publishing to app stores.",
        },
      ],
    },
    aiLearnings: {
      label: "KEY LESSONS ABOUT AI",
      heading: "More context. Tokens aren't cheap.",
      items: [
        {
          title: "Context reduces cost and improves accuracy",
          description: "Clear documentation and rules reduce repeated explanations and help AI make decisions aligned with the project.",
        },
        {
          title: "Autonomy needs clear criteria",
          description: "Autonomy starts with a clear goal and acceptance criteria. Validating the solution’s direction before automating tests and QA helps avoid rework and unnecessary token usage.",
        },
        {
          title: "Recurring knowledge should live in the project",
          description: "Record recurring commands and information in package.json scripts or documentation. This lets AI focus on the problem without rediscovering how to start the project, run tests or inspect the environment.",
        },
      ],
    },
  },
  closing: {
    kicker: "THE STORY CONTINUES",
    title: "The next chapter",
    accent: "is taking shape.",
    text: "Thank you for being part of this conversation.",
    action: "Home",
  },
  ds: {
    title: "The visual foundation",
    accent: "of this presentation.",
    intro:
      "Tokens, typography and components used in this presentation.",
    colorNames: {
      paper: "Paper",
      ink: "Ink",
      muted: "Muted",
      rule: "Rule",
      soft: "Soft",
    },
    displayLabel: "Display",
    bodyLabel: "Body",
    labelLabel: "LABEL",
    foundations: "Foundations",
    type: "Typography",
    colors: "Colors",
    spacing: "Spacing",
    components: "Components",
    principles: "Principles",
    display: "Headlines that tell stories.",
    body: "An interface that puts the story first.",
    button: "Primary action",
    secondary: "Secondary action",
    disabled: "Unavailable",
    sample: "Component example",
    active: "Selected",
    message: "Component activated.",
    principlesList: [
      "Typography creates hierarchy.",
      "Space organizes the narrative.",
      "The accent color guides actions.",
      "Each screen presents one idea.",
    ],
  },
};

export const content = { pt, en };
