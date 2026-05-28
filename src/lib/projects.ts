export type ProjectSection = {
  title?: string;
  paragraphs: string[];
};

export type Project = {
  id: number;
  title: string;
  category: string;
  img: string;
  description: string;
  header?: string[];
  gallery?: string[];
  body?: ProjectSection[];
};

export const projects: Project[] = [
  {
    id: 7,
    title: "Gorila - Mobile App",
    category: "User Experience",
    img: "/assets/Gorila/p7-gorilla-mobile-app.png",
    description: "A mobile-first UX case study centered on intuitive navigation, motion, and accessibility for a modern app experience.",
    header: [
      "Case Study · 2025",
      "GorilaVIEW · Fintech B2B+B2C",
      "Product Designer · Em produção",
    ],
    gallery: [
      "/assets/Gorila/p7-gorilla-mobile-app.png",
      "/assets/Gorila/p7-fluxos-borda.png",
      "/assets/Gorila/p7-connect-portfolio.png",
      "/assets/Gorila/p7-connect-portfolio-2.png",
      "/assets/Gorila/p7-connect-portfolio-3.png",
      "/assets/Gorila/p7-connect-portfolio-4.png",
      "/assets/Gorila/p7-connect-portfolio-5.png",
      "/assets/Gorila/p7-fluxo-connect-portfolio-1-recebimento-solicitacao.png",
      "/assets/Gorila/p7-fluxo-connect-portfolio-2-recebimento-login.png",
      "/assets/Gorila/p7-fluxo-connect-portfolio-3-gestao-enviados.png",
      "/assets/Gorila/p7-fluxo-connect-portfolio-4-recebimento-solicitacao.png",
      "/assets/Gorila/p7-fluxo-principal.png",
    ],
    body: [
      {
        title: "Resumo executivo",
        paragraphs: [
          "O GorilaVIEW não tinha como conectar investidores, assessores e empresas dentro da mesma plataforma. Projetei um sistema de compartilhamento de portfólios capaz de integrar os contextos B2B e B2C, cobrindo desde o envio do convite até a gestão de múltiplas conexões ativas — em web e mobile.",
          "O resultado foram 4 fluxos distintos, 15+ cenários validados e lançamento com adoção real.",
        ],
      },
      {
        title: "01 · O produto",
        paragraphs: [
          "GorilaVIEW é uma plataforma de gestão de investimentos que atende tanto investidores individuais (B2C) quanto assessores e empresas (B2B). O produto já existia, mas as duas experiências operavam de forma isolada — sem uma ponte que permitisse o compartilhamento de portfólios entre os perfis.",
          "Meu papel foi liderar o UX do zero: pesquisa, mapeamento de requisitos, wireframes, casos de borda e handoff para UI.",
        ],
      },
      {
        title: "02 · O problema",
        paragraphs: [
          "Assessores precisavam visualizar os portfólios dos seus clientes dentro da plataforma, e empresas precisavam conectar suas organizações às dos investidores — mas não havia nenhum fluxo para isso. O processo era manual, resolvido via suporte.",
          "Sem um sistema de convites, permissões e limites bem definido, qualquer solução viraria fonte de conflito e confusão para os três perfis de usuário.",
          "Antes → Processo manual, sem rastreio, resolvido caso a caso pelo time de suporte. Depois → Sistema de convites com controle de permissões, limites de plano e gestão centralizada de conexões.",
        ],
      },
      {
        title: "03 · Descoberta & Objetivos",
        paragraphs: [
          "A investigação começou com entrevistas com PO, CPO, time de CX e assessores para entender como o processo manual funcionava na prática. Os insumos direcionaram todas as user stories e o fluxo base de experiência.",
          "Quatro decisões centrais emergiram da pesquisa: limites de plano, permissões distintas, operação individual e em lote, consistência web e mobile.",
          "Objetivos do projeto: eliminar a dependência do suporte para conexões · garantir clareza sobre limites e permissões · viabilizar gestão em escala para assessores e empresas · manter consistência entre web e mobile.",
        ],
      },
      {
        title: "04 · A solução · 4 Fluxos",
        paragraphs: [
          "O sistema de Portfolio Connect opera em quatro fluxos. Cada um representa uma jornada diferente — quem recebe, quem envia, quem gerencia envios e quem gerencia recebimentos.",
          "Fluxo 01: Investidor recebe convite de assessor ou empresa, autentica, escolhe portfólio e confirma a conexão.",
          "Fluxo 02: Assessor ou empresa inicia o convite, acompanha status e gerencia pendências centralizadas.",
          "Fluxo 03: Usuário visualiza, reenvia, desfaz e altera permissões de todas as conexões que iniciou.",
          "Fluxo 04: Organização gerencia todos os portfólios conectados recebidos — status, permissão, data e ações por registro.",
          "Casos de borda previstos desde o wireframe: paywall para limite de portfólios, alertas para convites simultâneos e bloqueio de portfólios já conectados.",
        ],
      },
      {
        title: "05 · Deep dive · Fluxo 01 — ORG Pessoal recebe solicitação",
        paragraphs: [
          "O fluxo principal — e o mais crítico para a adoção. Cobre o caminho completo de quem recebe um convite pela primeira vez.",
          "Convite chega por e-mail → link leva para a plataforma → novo usuário cria conta ou usuário existente faz login → modal de aceitação exibe portfólios com permissão de owner → usuário seleciona o portfólio e confirma → conexão ativada.",
          "A transição entre receber convite e conexão ativa foi desenhada para ser concluída sem saída da plataforma e sem contato com suporte — mesmo nos cenários de borda.",
        ],
      },
      {
        title: "06 · Telas principais",
        paragraphs: [
          "Quatro fluxos desenhados em web e mobile, com cobertura de estado normal e casos de borda.",
          "Recebimento: e-mail → login → modal de seleção → confirmação. Envio: seleção de portfólio → envio do convite → painel de status. Gestão de enviados: lista de conexões com reenvio, desfazimento e edição de permissão. Gestão de recebidos: portfólios conectados com owner/editor e indicadores de atividade.",
        ],
      },
      {
        title: "07 · Validação & Handoff",
        paragraphs: [
          "Os fluxos foram testados em mais de 15 cenários na web e 12 no mobile ao longo de sprints com PO, CPO e stakeholders. Os ciclos de feedback geraram refinamentos textuais, ajustes de interação e validação visual antes do handoff para UI.",
          "A documentação entregue ao time de UI cobriu fluxos completos, regras de negócio por estado, user stories por cenário e especificidades de responsividade web e mobile.",
        ],
      },
      {
        title: "08 · Resultados",
        paragraphs: [
          "Facilitou crescimento nos portfólios conectados desde o lançamento.",
          "Eliminação do processo manual — conexões que dependiam do suporte passaram a ser autossuficientes para todos os perfis de usuário.",
          "Cobertura total de cenários críticos — limites de plano, convites simultâneos e conflitos de permissão resolvidos diretamente na interface.",
          "Menos fricção — fluxo principal concluído sem saída da plataforma e sem contato com suporte. Adoção real desde o lançamento — crescimento mensurável nas conexões de portfólio após o go-live.",
        ],
      },
    ],
  },
  {
    id: 0,
    title: "Plenno",
    category: "User Experience",
    img: "/assets/Plenno/p0-plenno.png",
    description: "A product and interface design case exploring accessible workflows, visual clarity, and responsive interactions.",
    header: [
      "Plenno · Healthcare SaaS",
      "Lead Product Designer ·",
    ],
    gallery: [
      "/assets/Plenno/p0-plenno.png",
      "/assets/Plenno/p0-default-contracts-screen.png",
      "/assets/Plenno/p0-documentation.png",
      "/assets/Plenno/p0-edit.png",
      "/assets/Plenno/p0-favorites-default.png",
      "/assets/Plenno/p0-history.png",
      "/assets/Plenno/p0-org-documentation.png",
      "/assets/Plenno/p0-org-doc-history.png",
      "/assets/Plenno/p0-modal-add.png",
      "/assets/Plenno/p0-modal-edit.png",
      "/assets/Plenno/p0-dialog-delete.png",
      "/assets/Plenno/p0-tooltip-addition.png",
    ],
    body: [
      {
        title: "Resumo executivo",
        paragraphs: [
          "O Plenno tinha uma sidebar única para todos os usuários — gestores financeiros, coordenadores médicos e diretores viam o mesmo menu, independente do que precisavam fazer. Redesenhei a navegação como um componente contextual que se reconfigura conforme a persona e a permissão ativa, entregando 7 jornadas distintas a partir de um único componente — incorporado ao design system e em produção.",
        ],
      },
      {
        title: "01 · O produto",
        paragraphs: [
          "Um SaaS B2B de gestão de plantões médicos usado por UPAs, hospitais e prefeituras. Em um único produto convivem RH, financeiro, compliance documental e operação de campo. Meu papel foi liderança de design end-to-end: descoberta, arquitetura de informação, definição de componentes e condução do time de design.",
        ],
      },
      {
        title: "02 · O problema",
        paragraphs: [
          "A sidebar era uma árvore vertical fixa com todos os módulos do produto. O gestor financeiro via os mesmos itens que o coordenador médico — e nenhum dos dois encontrava rápido o que precisava. O time de suporte recebia tickets recorrentes para 'encontrar' páginas que estavam a três cliques de distância.",
          "Antes → Cascata hierárquica, cega ao contexto, sem indicação de localização. Depois → Sidebar que se reconfigura conforme o contexto ativo do usuário.",
        ],
      },
      {
        title: "03 · Descoberta & Objetivos",
        paragraphs: [
          "A investigação começou nos logs de suporte, não no Figma. Entrevistas com gestores e análise de tickets revelaram quatro insights centrais:",
          "Comportamento — o usuário gasta >80% do tempo dentro de um único contrato ou unidade. A sidebar tratava todas as opções como igualmente prováveis. Permissionamento — ao cruzar permissões reais com tarefas reais, sete jornadas distintas emergiram do mesmo produto. Densidade — telas como Faturamento e Documentação têm 10+ colunas. Em monitor 1366px, a sidebar colapsada deixou de ser feature — virou requisito. Reuso — reusar a mesma anatomia (tabela, filtros, kanban) variando apenas o conteúdo da sidebar: o usuário aprende uma vez, aplica em sete lugares.",
          "Quatro objetivos guiaram o projeto: reduzir esforço cognitivo na navegação · separar jornadas por persona · padronizar o componente Sidebar no design system · reduzir custo de onboarding e ruído com suporte.",
        ],
      },
      {
        title: "04 · A solução · 7 Contextos",
        paragraphs: [
          "A sidebar opera em sete contextos. Cada contexto é uma combinação (persona × intenção × permissão) que determina exatamente quais páginas são exibidas. Não são telas diferentes — é o mesmo componente carregando estruturas diferentes.",
          "Contexto 01: Contrato — operação do contrato com profissionais, documentos, faturamento e indicadores. Contexto 02: Unidades — visão da unidade hospitalar com escalas, plantões e equipe operacional. Contexto 03: Favoritos — camada pessoal com páginas fixadas pelo próprio usuário. Contexto 04: ORG — vista executiva com dashboards agregados. Contexto 05: Backoffice — painel interno com permissões e operações em lote. Contexto 06: Base Global — registro mestre de profissionais. Contexto 07: Não Configurado — estado de fallback com mensagem construtiva.",
          "Dois modos de exibição: expandida (navegação completa) e colapsada (libera até ~200px horizontais para tabelas densas).",
        ],
      },
      {
        title: "05 · Deep dive · Contexto Contrato",
        paragraphs: [
          "O contexto principal — onde gestores resolvem o dia-a-dia de profissionais, documentos e faturamento. 14 páginas organizadas em hierarquia de 3 níveis:",
          "Lista de Contratos → ponto de entrada. [Contrato ativo] → Edição do Contrato (5 tabs), Indicadores de Presença (KPIs de conformidade), Profissionais (Cadastro e Documentação com Histórico), Faturamento (Gestão e Fluxo Financeiro em kanban), Unidades vinculadas.",
          "A transição Contrato → Unidade é imperceptível: o header persiste, a sidebar se reconfigura. O usuário entende que continua dentro do mesmo registro — apenas vendo outra faceta dele.",
        ],
      },
      {
        title: "06 · Telas principais · Contexto Contrato",
        paragraphs: [
          "Nove telas desenhadas em dois estados (expandida / colapsada): Lista de Contratos (tabela densa, status pills, CTA contextual), Menu Contextual (hierarquia 3 níveis, drill-down sem perder o pai), Indicadores de Presença (KPI cards, barras de progresso, cor como atalho mental), Cadastro de Profissionais (sinalização inline de pendência documental), Documentação (matriz 30 colunas, tabs), Histórico (auditoria de versões), Gestão de Faturamento (filtros encadeados, tabela larga), Fluxo Financeiro em Kanban (3 estados semânticos), Edição do Contrato (multi-tabs, ~200px adicionais na colapsada).",
        ],
      },
      {
        title: "07 · Design System & Microinterações",
        paragraphs: [
          "A sidebar foi incorporada ao design system do produto com tokens, estados, comportamentos e acessibilidade documentados.",
          "Microinterações chave: Toggle de borda viva — botão ancorado na fronteira entre sidebar e conteúdo, sempre acessível. Favoritos persistentes — páginas fixadas que sobrevivem a trocas de contexto. Modo claro/escuro — toggle no rodapé da sidebar. Hierarquia visível — contrato ativo destacado com nível filho aberto. Tokens semânticos: Plenno Teal #0F5C5C · Valoração #F59E0B · Disputa #A855F7 · Faturada #10B981.",
        ],
      },
      {
        title: "08 · Resultados",
        paragraphs: [
          "'Antes eu abria a navegação e travava. Hoje sinto que ela já sabe o que eu vim fazer.' — Gestora financeira, cliente Plenno · feedback pós-lançamento",
          "Localização imediata — usuários reportaram melhora na velocidade para encontrar páginas no dia-a-dia. Menos rolagem horizontal — a sidebar colapsada viabilizou trabalho em monitores 1366px. Reuso no design system — o time passou a criar novos módulos sem reinventar navegação. Onboarding mais curto — o contexto guia sem exigir mapa mental.",
          "Navegação é arquitetura, não decoração. Os 7 contextos, do operacional ao silencioso, formam um sistema — não sete produtos.",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Somos Cataguá 2019/2020",
    category: "Visual Design",
    img: "/assets/p1-catagua-construtora.jpg",
    description: "A branding and visual identity project focused on storytelling, typography, and crafted graphic systems.",
  },
  {
    id: 2,
    title: "Health Awareness Campaigns",
    category: "Visual Design & Endomarketing",
    img: "/assets/p2-catagua-construtora-saude.png",
    description: "Design-driven communication for health campaigns that balance empathy, clarity, and compelling visual impact.",
  },
  {
    id: 3,
    title: "Connecting Plus 2016",
    category: "Xilogravura & Social Media",
    img: "/assets/p3-connecting-plus.png",
    description: "A multidisciplinary campaign blending print-inspired illustration with digital social media storytelling.",
  },
  {
    id: 4,
    title: "Lillo 2013/2014",
    category: "Visual Design & Social Media",
    img: "/assets/p4-lillo.png",
    description: "A creative visual design case study for social media that uses bold composition and refined brand assets.",
  },
  {
    id: 5,
    title: "SupraSoy 2013/2014",
    category: "Visual Design & Social Media",
    img: "/assets/p5-suprasoy-sports.png",
    description: "A sports-inspired brand activation with vibrant visuals, energetic layouts, and product-driven storytelling.",
  },
  {
    id: 6,
    title: "Miró Marketing",
    category: "Brand Development",
    img: "/assets/p6-miro-branding.png",
    description: "A brand development case focusing on visual language, strategic positioning, and identity cohesion.",
  },
  {
    id: 8,
    title: "Não + Fat",
    category: "Brand Development",
    img: "/assets/p8-nao-fat.png",
    description: "A concept-driven campaign about lifestyle wellness with bold brand voice and structural clarity.",
  },
  {
    id: 9,
    title: "Coca-Cola Project",
    category: "Fictional Project",
    img: "/assets/p9-coca-cola-fictional.png",
    description: "A fictional product design exploration that reimagines brand experience through playful visual systems.",
  },
  {
    id: 10,
    title: "Água Viva",
    category: "Visual Design",
    img: "/assets/AguaViva/p10-agua-viva-web.png",
    description: "A packaging and digital identity case study built around organic textures, color, and brand purpose.",
  },
  {
    id: 11,
    title: "Azul TI",
    category: "Visual Design",
    img: "/assets/p11-azul-ti-web.png",
    description: "A technology brand refresh highlighting clean visuals, trust, and digital presentation.",
  },
  {
    id: 12,
    title: "Connecting Plus",
    category: "Visual Design",
    img: "/assets/p12-connecting-plus-web.png",
    description: "A visual system project blending web design with brand storytelling for a digital-first audience.",
  },
  {
    id: 13,
    title: "Jaque Borges",
    category: "Visual Design",
    img: "/assets/p13-jaque-borges-web.png",
    description: "A personal branding case study featuring editorial layouts, type treatment, and refined presentation.",
  },
  {
    id: 14,
    title: "LAP",
    category: "Visual Design",
    img: "/assets/LAP/p14-lap-web.png",
    description: "A corporate design project focused on clear hierarchies, visual rhythm, and confident brand expression.",
  },
  {
    id: 15,
    title: "Neuronio Adicional",
    category: "Visual Design",
    img: "/assets/NeuronioAdicional/p15-neuronio-adicional-web.png",
    description: "A visual identity exploration with a creative focus on neuroscience-inspired shapes and moods.",
  },
  {
    id: 16,
    title: "Pet Molhado",
    category: "Visual Design",
    img: "/assets/PetMolhado/p16-pet-molhado-web.png",
    description: "A playful pet brand project balancing illustration, typography, and product appeal.",
  },
  {
    id: 17,
    title: "Piccolo Bar e Flair",
    category: "Visual Design",
    img: "/assets/PicoloBar/p17-piccolo-bar-e-flair-web.png",
    description: "A hospitality design case blending atmosphere, branding, and event-driven visual communication.",
  },
  {
    id: 18,
    title: "Sabiá Laranjeira Special Coffee",
    category: "Visual Design",
    img: "/assets/SabiaLaranjeira/p18-sabia-laranjeira-special-coffee-web.png",
    description: "A premium packaging and visual identity project for a specialty coffee brand.",
  },
  {
    id: 19,
    title: "Varb Metalúrgica",
    category: "Visual Design",
    img: "/assets/Varb/p19-varb-metalurgica-web.png",
    description: "A B2B manufacturing brand case study centered on clarity, professionalism, and material storytelling.",
  },
  {
    id: 21,
    title: "Pra Construir - Marketplace",
    category: "UX/UI Design",
    img: "/assets/PraConstruir/p21-pra-construir-marketplace-web.png",
    description: "A marketplace UX/UI case with a focus on product discovery, conversion, and visual clarity.",
  },
];
