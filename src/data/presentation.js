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
    description: "Ajuste a apresentação para cada conversa.",
    language: "Idioma",
    color: "Cor de destaque",
    colorHelp: "Escolha a cor da empresa ou cole o código hexadecimal.",
    picker: "Escolher cor de destaque",
    hex: "Código hexadecimal",
    invalid: "Use seis caracteres de 0 a 9 ou A a F, como #193CF5.",
    presets: "Sugestões de cores",
    defaultColor: "Azul padrão",
    preview: "Prévia",
    previewText: "Sua trajetória.",
    previewAccent: "Sua identidade.",
    saved: "As preferências ficam salvas neste navegador.",
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
    "Próximo capítulo",
    "AB InBev",
    "Projeto 01",
    "Projeto 02",
    "Projetos pessoais",
    "Encerramento",
  ],
  nav: [
    { number: "01", title: "Sobre mim", target: "sobre" },
    {
      number: "02",
      title: "Como tudo começou",
      subtitle: "Faculdade",
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
    subtitle: "Pessoas, tecnologia e dados.",
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
        "Jogos online, embora hoje eu jogue menos por causa da rotina; cozinhar, musculação e viagens.",
      ],
    ],
  },
  college: {
    title: "Minha",
    accent: "formação.",
    intro:
      "Análise e Desenvolvimento de Sistemas · Faculdade de Tecnologia do Estado de São Paulo (FATEC)",
    period: "Janeiro de 2019 — dezembro de 2021",
    steps: [
      [
        "A escolha do curso",
        "Sempre gostei de exatas e pensava em cursar engenharia. O contato com tecnologia por meio dos jogos me levou para a área de TI.",
      ],
      [
        "Durante a graduação",
        "Comecei a estagiar em agosto de 2020, e essa experiência reforçou ainda mais minha vontade de crescer na área de desenvolvimento.",
      ],
      [
        "De logaritmos a algoritmos",
        "No primeiro semestre, confundi Algoritmos com logaritmos. No início, não entendia quase nada; com o tempo, me apaixonei por lógica de programação.",
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
        "Na ACCT Global, participei de projetos de e-commerce para marcas de diferentes segmentos, atuando em frentes simultâneas e colaborando com Produto, QA e Design.",
      ],
      [
        "Meu papel",
        "Arquitetura de funcionalidades, desenvolvimento frontend, testes A/B, deploys e mentoria.",
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
        "O que levo comigo",
        "Pensar além do board e olhar para o usuário final: como aproveitar a janela de entrega para levar uma feature ao seu melhor resultado?",
      ],
      [
        "Por que mudar",
        "Eu queria entender o impacto do meu código no produto. Isso era difícil quando, a cada três meses, eu estava em um cliente diferente.",
      ],
      [
        "O próximo passo",
        "Entrar em uma empresa de produto para acompanhar os dados e os resultados gerados pelo meu código e pelo meu conhecimento.",
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
      "Atuo no desenvolvimento e na evolução de produtos de e-commerce B2C, conectando arquitetura, produto e experiência em aplicações web, mobile e backend.",
    projects: [
      ["Zé Delivery", "Cerca de 1 ano e 8 meses de atuação."],
      ["TaDa Delivery", "Iniciei no projeto no início de 2024."],
    ],
    action: "Conhecer o projeto",
  },
  projects: [
    {
      title: "Zé",
      accent: "Delivery.",
      description:
        "Principal produto DTC da AB InBev no Brasil: entrega bebidas geladas em menos de 30 minutos e atende mais de 9 milhões de consumidores por ano.",
      period: "",
      stages: [
        [
          "Seller · Gestão do ponto de venda",
          "Atuei no time responsável pela plataforma de gestão do ponto de venda, desenvolvendo funcionalidades de estoque e pagamento online.",
          "Início · 05/22",
        ],
        [
          "Consumer · Sampling",
          "Como o ritmo e o contexto B2B de Seller não se encaixavam no que eu buscava, fui para Consumer entregar o Sampling. O projeto durou quase oito meses e permitia que consumidores experimentassem bebidas por R$ 0,01.",
          "Início · 01/23",
        ],
        [
          "Seller · Entrega agendada",
          "Em um projeto de cerca de seis meses, desenvolvi e apoiei o time de Produto na entrega da experiência de entrega agendada para Seller.",
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
      evidence: "Revisamos as queries do React Query e configuramos as chaves de cache e o staleTime para reaproveitar respostas sem executar novas chamadas desnecessárias. Comparando semanas com volume de sessões equivalente, os testes apontaram uma redução de quase 4 milhões de requisições ao backend.",
      article: {
        label: "Ler o artigo no Medium",
        url: "https://medium.com/@renanguerraa_/como-utilizamos-do-cache-a-ponto-de-diminuir-as-requests-em-4-milh%C3%B5es-no-seu-z%C3%A9-ae77450fbd33",
      },
    },
    {
      title: "TaDa",
      accent: "Delivery.",
      description:
        "Primeira plataforma DTC global da AB InBev: entrega bebidas em até 30 minutos e alcançou mais de 1 milhão de consumidores em 11 países.",
      period: "",
      stages: [
        [
          "Consumer · Checkout",
          "Entrei no projeto e permaneci por quase dois anos e meio. Comecei entendendo o novo framework de trabalho e a arquitetura com BFF, evoluí no entendimento do débito técnico de um produto novo e passei a liderar tecnicamente o time. Entre os principais destaques estão a evolução da observabilidade e o apoio constante ao time de Produto com dados de negócio.",
          "Início · 01/2024",
        ],
        [
          "Consumer · Omnichannel",
          "Entrei no time para aplicar os padrões de engenharia implementados no Checkout, além de apoiar a arquitetura e a liderança técnica de outras features. Estruturei e compartilhei com o time práticas para usar IA no desenvolvimento, como Cursor Rules, criando contextos mais precisos para reduzir o consumo de tokens e direcionar melhor as tarefas. A evolução da observabilidade continuou entre os principais destaques.",
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
      achievement: "De cerca de 4% para 0,3% de pedidos com erro",
      evidence:
        "Com a evolução da IA no projeto, criamos um MCP que integrava ferramentas como New Relic, Amplitude e Jira. A análise cruzada dos dados ajudou a rastrear débitos técnicos na captura de informações e na engenharia, reduzindo a taxa de pedidos com erro de aproximadamente 4% para 0,3%.",
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
          description: "O celular obtém a localização do usuário e envia latitude e longitude para a API. No PostgreSQL, o PostGIS usa um índice geográfico para localizar partidas em um raio padrão de 15 km. O banco calcula a distância, ordena os resultados do mais próximo ao mais distante e aplica a paginação. A resposta informa a distância em quilômetros e se o usuário já participa de cada partida.",
        },
        {
          title: "Criar partida",
          description: "O usuário escolhe o esporte, a data, os detalhes e o local da partida no mapa. O endereço selecionado gera latitude e longitude, permitindo que a nova partida seja exibida corretamente no fluxo de descoberta por proximidade.",
        },
        {
          title: "My Account",
          description: "Na área My Account, o usuário acompanha seus principais indicadores, como total de jogos, partidas criadas, taxa de participação e esportes mais frequentes, tendo uma visão rápida da sua atividade na plataforma.",
        },
        {
          title: "Notificações personalizadas",
          description: "O usuário escolhe um ou mais esportes e define um raio de 5, 10 ou 15 km. Ao salvar, o aplicativo registra a localização usada na busca e habilita o dispositivo para receber avisos de novas partidas compatíveis dentro da área selecionada. As preferências podem ser alteradas posteriormente nos ajustes do perfil.",
        },
        {
          title: "Chat da partida",
          description: "Cada partida possui um chat exclusivo para os participantes combinarem os detalhes do jogo. A conversa mantém o histórico de mensagens e oferece recursos de segurança para bloquear jogadores ou denunciar conteúdos inadequados.",
        },
      ],
    },
    sectionLabel: "COMO FUNCIONA O APP",
    heading: "Transformamos vontade de jogar em partidas reais",
    description:
      "A Convoca é um aplicativo para criar e encontrar partidas esportivas perto de você, convidar pessoas e confirmar presença.",
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
      intro: "A IA participou de todo o processo: ajudou a transformar a ideia em produto, manter contexto entre as etapas e acelerar decisões que iam além do código.",
      steps: [
        {
          tool: "Miro AI",
          title: "Ideia e protótipo inicial",
          description: "Comecei usando a IA do Miro para transformar a ideia inicial em fluxos e um primeiro protótipo visual.",
        },
        {
          tool: "Codex",
          title: "Estrutura e contexto",
          description: "Com as telas esboçadas, planejei a estrutura de dados e gerei arquivos de documentação para dar à IA contexto sobre o produto, as telas e as APIs.",
        },
        {
          tool: "Skill de Product Design",
          title: "Design e regras finais",
          description: "Usei a skill de Product Design para evoluir o protótipo, fechar as telas e consolidar as regras e a documentação de cada feature.",
        },
        {
          tool: "Desenvolvimento com IA",
          title: "Produto em código",
          description: "Com o produto e os contextos documentados, iniciei o desenvolvimento do aplicativo e das APIs com um fluxo totalmente guiado por IA.",
        },
        {
          tool: "Produto e operação",
          title: "Além do desenvolvimento",
          description: "Depois do aplicativo, usei a IA para entender hospedagem, registro da marca no INPI e o processo de lançamento nas lojas.",
        },
      ],
    },
    aiLearnings: {
      label: "PRINCIPAIS APRENDIZADOS SOBRE IA",
      heading: "Mais contexto. Tokens não são baratos.",
      items: [
        {
          title: "Contexto reduz custo e aumenta precisão",
          description: "Documentos e rules bem definidos evitam explicações repetidas, preservam a janela de contexto e ajudam a IA a tomar decisões mais alinhadas ao projeto.",
        },
        {
          title: "Autonomia precisa de critérios",
          description: "O resultado final não é a única medida de qualidade. A IA também precisa seguir o processo adequado: primeiro validamos se a solução atende ao objetivo; depois executamos testes e verificações de QA, evitando automações prematuras e consumo desnecessário de tokens.",
        },
        {
          title: "Conhecimento recorrente deve viver no projeto",
          description: "Comandos frequentes e informações operacionais devem estar registrados em scripts do package.json ou na documentação. Assim, a IA pode se concentrar no problema, em vez de redescobrir como iniciar o projeto, executar testes ou consultar o ambiente.",
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
    title: "Uma linguagem.",
    accent: "Muitas histórias.",
    intro: "A base visual da apresentação: editorial, clara e intencional.",
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
      "O azul orienta a ação.",
      "Cada tela apresenta uma ideia.",
    ],
  },
};

const en = {
  settings: {
    title: "Settings",
    presentation: "Presentation",
    description: "Tailor the presentation to each conversation.",
    language: "Language",
    color: "Accent color",
    colorHelp: "Choose the company’s color or paste its hex code.",
    picker: "Choose accent color",
    hex: "Hex code",
    invalid: "Use six characters from 0–9 or A–F, such as #193CF5.",
    presets: "Suggested colors",
    defaultColor: "Default blue",
    preview: "Preview",
    previewText: "Your journey.",
    previewAccent: "Your identity.",
    saved: "Your preferences are saved in this browser.",
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
    "University",
    "ACCT Global",
    "Next chapter",
    "AB InBev",
    "Project 01",
    "Project 02",
    "Personal projects",
    "Closing",
  ],
  nav: [
    { number: "01", title: "About me", target: "sobre" },
    {
      number: "02",
      title: "How it all started",
      subtitle: "University",
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
    subtitle: "People, technology and data.",
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
        "Online games, although I play less often now because of my routine; cooking, strength training and traveling.",
      ],
    ],
  },
  college: {
    title: "My",
    accent: "education.",
    intro:
      "Systems Analysis and Development · Faculdade de Tecnologia do Estado de São Paulo (FATEC)",
    period: "January 2019 — December 2021",
    steps: [
      [
        "Choosing the degree",
        "I always enjoyed maths and science and considered studying engineering. My early contact with technology through games led me to pursue a career in IT.",
      ],
      [
        "During university",
        "I started my internship in August 2020, and the experience reinforced my desire to keep growing as a software developer.",
      ],
      [
        "From logarithms to algorithms",
        "In my first semester, I confused algorithms with logarithms. At first, I understood almost nothing; over time, I fell in love with programming logic.",
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
        "At ACCT Global, I worked on e-commerce projects for brands across different sectors, contributing to concurrent workstreams alongside Product, QA and Design.",
      ],
      [
        "My role",
        "Feature architecture, frontend development, A/B tests, deployments and mentoring.",
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
        "What I take with me",
        "Looking beyond the board and focusing on the end user: how can we use a feature’s delivery window to achieve its best possible outcome?",
      ],
      [
        "Why move on",
        "I wanted to understand the impact of my code on the product. That was difficult when I moved to a different client every three months.",
      ],
      [
        "The next step",
        "Join a product company where I could follow the data and outcomes generated by my code and knowledge.",
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
      "I design and evolve B2C e-commerce products, connecting architecture, product and experience across web, mobile and backend applications.",
    projects: [
      ["Zé Delivery", "About 1 year and 8 months on the project."],
      ["TaDa Delivery", "I joined the project in early 2024."],
    ],
    action: "Explore the project",
  },
  projects: [
    {
      title: "Zé",
      accent: "Delivery.",
      description:
        "AB InBev’s main DTC product in Brazil: it delivers cold beverages in under 30 minutes and serves more than 9 million consumers per year.",
      period: "",
      stages: [
        [
          "Seller · Point-of-sale management",
          "I worked on the team responsible for the point-of-sale management platform, building inventory and online payment features.",
          "Start · 05/22",
        ],
        [
          "Consumer · Sampling",
          "Seller’s pace and B2B context were not a good fit for what I was looking for, so I moved to Consumer to deliver Sampling. The project lasted almost eight months and allowed consumers to try beverages for R$0.01.",
          "Start · 01/23",
        ],
        [
          "Seller · Scheduled delivery",
          "In a shorter project lasting around six months, I developed and supported the Product team in delivering Seller’s scheduled-delivery experience.",
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
        "We reviewed the React Query queries and configured cache keys and staleTime to reuse responses without making unnecessary new calls. Comparing weeks with equivalent session volumes, the tests showed nearly 4 million fewer backend requests.",
      article: {
        label: "Read the article on Medium",
        url: "https://medium.com/@renanguerraa_/como-utilizamos-do-cache-a-ponto-de-diminuir-as-requests-em-4-milh%C3%B5es-no-seu-z%C3%A9-ae77450fbd33",
      },
    },
    {
      title: "TaDa",
      accent: "Delivery.",
      description:
        "AB InBev’s first global DTC platform: it delivers beverages in up to 30 minutes and reached more than 1 million consumers across 11 countries.",
      period: "",
      stages: [
        [
          "Consumer · Checkout",
          "I joined the project and stayed for almost two and a half years. I began by learning the new working framework and BFF architecture, developed a deeper understanding of the technical debt in a new product, and went on to lead the team technically. Key highlights included improving observability and consistently supporting the Product team with business data.",
          "Start · 01/2024",
        ],
        [
          "Consumer · Omnichannel",
          "I joined the team to apply the engineering standards introduced in Checkout, while supporting the architecture and technical leadership of other features. I structured and shared practices for using AI in development, such as Cursor Rules, helping the team create more precise context, reduce token usage, and better direct each task. Improving the team’s observability remained one of the main highlights.",
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
      achievement: "From around 4% to 0.3% of orders with errors",
      evidence:
        "As AI adoption evolved within the project, we built an MCP that integrated tools such as New Relic, Amplitude, and Jira. Cross-referencing this data helped us trace technical debt in data collection and engineering, reducing the rate of orders with errors from approximately 4% to 0.3%.",
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
          description: "The phone obtains the user’s location and sends latitude and longitude to the API. In PostgreSQL, PostGIS uses a geographic index to find matches within a default 15 km radius. The database calculates the distance, sorts results from nearest to farthest, and applies pagination. The response includes the distance in kilometers and whether the user has already joined each match.",
        },
        {
          title: "Create a match",
          description: "Users choose the sport, date, details, and match location on the map. The selected address generates latitude and longitude, allowing the new match to appear correctly in the proximity-based discovery flow.",
        },
        {
          title: "My Account",
          description: "In My Account, users can track key indicators such as total games, matches created, participation rate, and most-played sports, providing a quick view of their activity across the platform.",
        },
        {
          title: "Personalized notifications",
          description: "Users can select one or more sports and choose a radius of 5, 10, or 15 km. When preferences are saved, the app records the location used for discovery and enables the device to receive alerts about matching new games within the selected area. These preferences can be changed later in profile settings.",
        },
        {
          title: "Match chat",
          description: "Each match has an exclusive chat where participants can coordinate game details. The conversation keeps a message history and provides safety tools for blocking players or reporting inappropriate content.",
        },
      ],
    },
    sectionLabel: "HOW THE APP WORKS",
    heading: "We turn the desire to play into real matches",
    description:
      "Convoca is an app for creating and finding nearby sports matches, inviting people, and confirming attendance.",
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
      label: "AI FROM MOMENT ZERO",
      heading: "From the first idea to launch",
      intro: "AI supported the entire process: turning the idea into a product, preserving context between stages, and accelerating decisions beyond the code itself.",
      steps: [
        {
          tool: "Miro AI",
          title: "Idea and initial prototype",
          description: "I started with Miro AI to turn the initial idea into flows and a first visual prototype.",
        },
        {
          tool: "Codex",
          title: "Structure and context",
          description: "With the screens outlined, I planned the data structure and generated documentation files to give AI context about the product, screens, and APIs.",
        },
        {
          tool: "Product Design skill",
          title: "Final design and rules",
          description: "I used the Product Design skill to evolve the prototype, finalize the screens, and consolidate the rules and documentation for each feature.",
        },
        {
          tool: "AI-guided development",
          title: "Turning the product into code",
          description: "With the product and its context documented, I began developing the app and APIs through a fully AI-guided workflow.",
        },
        {
          tool: "Product and operations",
          title: "Beyond development",
          description: "After building the app, I used AI to understand hosting, trademark registration with INPI, and the app-store launch process.",
        },
      ],
    },
    aiLearnings: {
      label: "KEY AI LEARNINGS",
      heading: "More context. Tokens aren't cheap.",
      items: [
        {
          title: "Context reduces cost and improves accuracy",
          description: "Well-defined documentation and rules prevent repeated explanations, preserve the context window, and help AI make decisions that are better aligned with the project.",
        },
        {
          title: "Autonomy needs clear criteria",
          description: "The final outcome is not the only measure of quality. AI also needs to follow the right process: first we validate that the solution meets the objective, then we run tests and QA checks, avoiding premature automation and unnecessary token usage.",
        },
        {
          title: "Recurring knowledge should live in the project",
          description: "Frequent commands and operational information should be recorded in package.json scripts or documentation. This allows AI to focus on the problem instead of rediscovering how to start the project, run tests, or inspect the environment.",
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
    title: "One language.",
    accent: "Many stories.",
    intro:
      "The presentation’s visual foundation: editorial, clear and intentional.",
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
      "Blue guides the action.",
      "Each screen presents one idea.",
    ],
  },
};

export const content = { pt, en };
