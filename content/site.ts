/**
 * ============================================================================
 *  CONTEÚDO DO SITE — edite SOMENTE este arquivo para atualizar o portfólio.
 * ============================================================================
 *  Todos os dados abaixo são EXEMPLOS (placeholders). Troque pelos seus.
 *  Nenhum componente precisa ser alterado.
 * ============================================================================
 */

export const site = {
  name: "gomesprogramador",
  /**
   * Foto do perfil: public/img/perfil.jpeg — para trocar, basta substituir
   * o arquivo (qualquer proporção quadrada funciona; ela é recortada em círculo).
   */
  /** Seu nome, usado no hero, no alt da foto e nos metadados. */
  person: "Paulo Gomes",
  role: "Desenvolvedor Fullstack Sênior",
  // TODO: ajuste o headline e o resumo
  headline: "Desenvolvedor Fullstack Sênior",
  summary:
    "Profissional focado na evolução técnica contínua e no acompanhamento das transformações do mercado de tecnologia. Pós-graduado em Arquitetura de Software pela FIAP, aprofundo constantemente meus conhecimentos em novas tecnologias, práticas modernas de engenharia e soluções escaláveis. Combino visão arquitetural aprofundada com uma postura prática e orientada a resultados.",
  location: "Brasília, DF",
  email: "gomesprogramador@outlook.com",
  github: "https://github.com/cavalcante001",
  linkedin: "https://www.linkedin.com/in/paulo-cavalcante-21037b225/",
  /**
   * WhatsApp em formato internacional, SÓ DÍGITOS: 55 + DDD + número.
   */
  whatsapp: "5561991133345",
  whatsappMessage: "Olá, Paulo! Vim pelo gomesprogramador.",
  phone: "61 9 9113-3345",
  // TODO: coloque a URL final do site (usada nas meta tags / OG)
  url: "https://gomesprogramador.com.br",
} as const;

/** ------------------------------------------------------------------ */

export type Experience = {
  company: string;
  role: string;
  period: string;
  /** Deixe `current: true` na posição atual para destacar. */
  current?: boolean;
  /** Caminho da logo da empresa em /public. */
  logo?: string;
  description: string;
  stack: string[];
};

// Experiência profissional real
export const experiences: Experience[] = [
  {
    company: "Ministério das Relações Exteriores (MRE)",
    role: "Desenvolvedor Fullstack Sênior",
    period: "Out 2022 — atual",
    current: true,
    logo: "/img/empresas/mre.png",
    description:
      "Atuação no desenvolvimento e sustentação de múltiplos sistemas internos e novos projetos. Atualmente dedicado ao SICOM, o maior sistema de comunicações de documentos classificados e sigilosos do país, lidando com regras de negócio críticas e alta exigência de segurança e integridade.",
    stack: [
      "Node.js",
      "React",
      "Next.js",
      "PHP",
      "PostgreSQL",
      "Apache Solr",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    company: "Ironfence",
    role: "DevOps / SRE (PJ)",
    period: "Nov 2024 — Dez 2026",
    logo: "/img/empresas/ironfence.png",
    description:
      "Implementação e sustentação de ecossistema Kubernetes com arquitetura de alta disponibilidade (HA). Estruturação completa de pipelines de CI com GitLab, CD automatizado com ArgoCD, gerenciamento centralizado de secrets com HashiCorp Vault e observabilidade de ponta a ponta com Elastic APM, Prometheus e Grafana.",
    stack: [
      "Kubernetes",
      "GitLab CI",
      "ArgoCD",
      "HashiCorp Vault",
      "Elastic APM",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
  },
  {
    company: "Marktclub",
    role: "Desenvolvedor Front-end Júnior",
    period: "Dez 2021 — Out 2022",
    logo: "/img/empresas/marktclub.png",
    description:
      "Responsável pelo desenvolvimento, manutenção e evolução dos sites e portais corporativos da empresa, entregando interfaces responsivas, acessíveis e de alta performance.",
    stack: ["PHP", "JavaScript", "HTML5", "CSS3"],
  },
  {
    company: "Marktclub",
    role: "Estagiário de Desenvolvimento",
    period: "Mai 2021 — Dez 2021",
    logo: "/img/empresas/marktclub.png",
    description:
      "Responsável pelos testes, rotinas de build, configurações técnicas e publicação dos aplicativos da empresa na Apple App Store e Google Play Store.",
    stack: [
      "React Native",
      "Mobile Testing",
      "Build & Release",
      "App Store Connect",
      "Google Play Console",
    ],
  },
  {
    company: "Controladoria-Geral do Distrito Federal (CGDF)",
    role: "Estagiário",
    period: "Fev 2020 — Mai 2021",
    logo: "/img/empresas/cgdf.png",
    description:
      "Realização de testes funcionais no Portal da Transparência do DF com o objetivo de identificar inconsistências, falhas e bugs, elaborando relatórios e reportando apontamentos à equipe técnica.",
    stack: ["Testes Funcionais", "QA", "Validação de Dados", "Relatórios Técnicos"],
  },
];

/** ------------------------------------------------------------------ */

export type Education = {
  institution: string;
  /** Ex.: "Pós-graduação", "Bacharelado", "Tecnólogo". */
  degree: string;
  /** Curso/área. Ex.: "Engenharia de Software". */
  field: string;
  period: string;
  description?: string;
};

// Formação acadêmica real
export const education: Education[] = [
  {
    institution: "FIAP — Centro Universitário",
    degree: "Pós-Graduação Lato Sensu (Especialização)",
    field: "Software Architecture",
    period: "2025 — 2026",
    description:
      "Especialização avançada (360h) com ênfase em Clean Architecture, Domain-Driven Design (DDD), Microsserviços e Padrão SAGA, Desenvolvimento Seguro, Serverless, API Gateway, Kubernetes, Docker, Terraform (IaC & CI/CD), Engenharia de Dados e Bancos em Grafos.",
  },
  {
    institution: "Faculdade Anhanguera",
    degree: "Graduação Tecnológica",
    field: "Análise e Desenvolvimento de Sistemas",
    period: "Concluído em 18/06/2022",
    description:
      "Formação superior voltada a projetar, desenvolver, testar e implantar softwares modernos para web, mobile e sistemas corporativos. Foco prático em levantamento de requisitos de negócio, arquitetura de software, modelagem de bancos de dados, integração de APIs, segurança da informação e governança em TI.",
  },
];

/** ------------------------------------------------------------------ */

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  /** URL pública de validação do certificado. */
  verifyUrl: string;
  /** Código/ID da credencial, se houver. */
  credentialId?: string;
  /** Destaque visual (ex.: certificação internacional de Node.js). */
  featured?: boolean;
  /** Ícone/Badge da certificação (ex.: /img/openjs.png). */
  icon?: string;
};

export const certifications: Certification[] = [
  {
    name: "JSNSD: OpenJS Node.js Services Developer",
    issuer: "The Linux Foundation",
    issued: "Certificação Internacional",
    verifyUrl: "https://www.credly.com/badges/03e73a57-88b6-449b-ae32-a14d0431a4c1/linked_in_profile",
    credentialId: "03e73a57-88b6-449b-ae32-a14d0431a4c1",
    featured: true,
    icon: "/badges/jsnsd.png",
  },
  {
    name: "JSE: Certified Entry-Level JavaScript Programmer",
    issuer: "JS Institute",
    issued: "Certificação Internacional",
    verifyUrl: "https://www.credly.com/badges/7d10bc0d-46ac-4d1c-a618-793ab0822cd2/linked_in_profile",
    credentialId: "7d10bc0d-46ac-4d1c-a618-793ab0822cd2",
    icon: "/badges/jse.png",
  },
  {
    name: "LFW211: Node.js Application Development",
    issuer: "The Linux Foundation",
    issued: "Certificação Oficial",
    verifyUrl: "https://www.credly.com/badges/52cf5c9c-94aa-4637-adcc-60798fc2ab8e/linked_in_profile",
    credentialId: "52cf5c9c-94aa-4637-adcc-60798fc2ab8e",
    icon: "/badges/lfw211.png",
  },
  {
    name: "Kubernetes Fundamentals (LFS258)",
    issuer: "The Linux Foundation",
    issued: "Certificação Oficial",
    verifyUrl: "/certificados/kubernetes-fundamentals-lfs258.pdf",
    credentialId: "LFS258",
    icon: "/badges/lfs258.png",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    issued: "Certificação",
    verifyUrl: "https://www.freecodecamp.org/certification/cavalcante001/javascript-algorithms-and-data-structures-v8",
    icon: "/badges/freecodecamp.png",
  },
  {
    name: "TypeScript do Zero ao Avançado",
    issuer: "B7Web",
    issued: "Certificado",
    verifyUrl: "https://app.b7web.com.br/certificates/ef0b3339-2b2d-409d-909c-860e607515a2",
    icon: "/badges/typescript.png",
  },
  {
    name: "TypeScript Avançado",
    issuer: "B7Web",
    issued: "Certificado",
    verifyUrl: "https://app.b7web.com.br/certificates/2529241",
    icon: "/badges/typescript.png",
  },
  {
    name: "JavaScript Profissional",
    issuer: "B7Web",
    issued: "Certificado",
    verifyUrl: "https://app.b7web.com.br/certificates/1641847",
    icon: "/badges/javascript.png",
  },
  {
    name: "Git e GitHub",
    issuer: "B7Web",
    issued: "Certificado",
    verifyUrl: "https://app.b7web.com.br/certificates/6802808",
    icon: "/badges/github.png",
  },
  {
    name: "HTML5 e CSS3",
    issuer: "B7Web",
    issued: "Certificado",
    verifyUrl: "https://app.b7web.com.br/certificates/1586468",
    icon: "/badges/html5.png",
  },
  {
    name: "Fundamentos em HTML e CSS",
    issuer: "B7Web",
    issued: "Certificado",
    verifyUrl: "https://app.b7web.com.br/certificates/c265ec98-1805-4fbe-aeed-7192635f969b",
    icon: "/badges/css.png",
  },
  {
    name: "Bootstrap 4",
    issuer: "B7Web",
    issued: "Certificado",
    verifyUrl: "https://app.b7web.com.br/certificates/9958881",
    icon: "/badges/bootstrap.png",
  },
  {
    name: "Formação TypeScript",
    issuer: "B7Web",
    issued: "Certificado",
    verifyUrl: "https://app.b7web.com.br/certificates/2fb36150-8212-4e3e-93d6-41452a983dd2",
    icon: "/badges/typescript.png",
  },
];

/** ------------------------------------------------------------------ */

export type Article = {
  /** Identificador na URL: /artigos/<slug>. Só letras minúsculas, números e hífen. */
  slug: string;
  title: string;
  excerpt: string;
  /** Formato ISO (AAAA-MM-DD) — usado para ordenar e para o <time>. */
  date: string;
  readingTime: string;
  tag: string;
  /** Corpo do artigo: um item do array = um parágrafo. */
  body: string[];
};

// Artigos autorais (em breve novos artigos técnicos)
export const articles: Article[] = [];
