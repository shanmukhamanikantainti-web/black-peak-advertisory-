export interface Service {
  id: string;
  number: string;
  romanNumeral: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 'web-mobile',
    number: '01',
    romanNumeral: 'I',
    title: 'WEB & MOBILE APPLICATIONS',
    description: 'Modern, scalable and high-performance digital products engineered with modern frameworks, strict type safety, and fluid interactions.',
    tags: ['React', 'Next.js', 'React Native', 'TypeScript', 'Web Architecture'],
  },
  {
    id: 'ai-ml',
    number: '02',
    romanNumeral: 'II',
    title: 'AI & MACHINE LEARNING',
    description: 'Intelligent systems that automate, analyze and improve decisions. Enterprise RAG pipelines, local models, and agent orchestration.',
    tags: ['LLMs', 'Agent Frameworks', 'Vector Search', 'RAG Pipelines', 'Computer Vision'],
  },
  {
    id: 'saas-products',
    number: '03',
    romanNumeral: 'III',
    title: 'SAAS & DIGITAL PRODUCTS',
    description: 'End-to-end product development from concept to launch. Architectural roadmaps, multi-tenant backend design, and monetization integration.',
    tags: ['Cloud Multi-Tenant', 'Stripe Billing', 'Auth & IAM', 'API Gateways'],
  },
  {
    id: 'automation-tools',
    number: '04',
    romanNumeral: 'IV',
    title: 'AUTOMATION & INTERNAL TOOLS',
    description: 'Custom systems that simplify operations, eradicate manual overhead, and drastically improve engineering & business efficiency.',
    tags: ['Workflow Engines', 'CLI Tools', 'Data Pipelines', 'Operational Tooling'],
  },
  {
    id: 'cloud-backend',
    number: '05',
    romanNumeral: 'V',
    title: 'CLOUD & BACKEND SYSTEMS',
    description: 'Reliable infrastructure, microservices, high-throughput APIs, and scalable backend architecture built for zero-downtime resilience.',
    tags: ['Distributed Systems', 'PostgreSQL', 'Docker', 'Serverless', 'High-QPS APIs'],
  },
  {
    id: 'product-design',
    number: '06',
    romanNumeral: 'VI',
    title: 'PRODUCT DESIGN',
    description: 'Minimal, functional and human-centered digital experiences rooted in classical proportions, typographic hierarchy, and Swiss clarity.',
    tags: ['Design Systems', 'Interface Architecture', 'User Experience', 'Prototyping'],
  },
];
