export interface Project {
  id: string;
  number: string;
  romanNumeral: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  year: string;
  techStack: string[];
  geometricType: 'concentric' | 'columns' | 'intersecting' | 'arch';
}

export const projects: Project[] = [
  {
    id: 'campus-eye',
    number: '01',
    romanNumeral: 'I',
    title: 'CAMPUS EYE',
    category: 'INSTITUTIONAL INTELLIGENCE',
    tagline: 'AI-powered monitoring system for educational institutions.',
    description: 'Autonomous spatial intelligence and automated attendance analytics built with edge computer vision and real-time inference pipelines.',
    year: '2025',
    techStack: ['Python', 'FastAPI', 'Edge AI', 'React', 'TypeScript'],
    geometricType: 'concentric',
  },
  {
    id: 'medicrew',
    number: '02',
    romanNumeral: 'II',
    title: 'MEDICREW',
    category: 'CLINICAL TELEMETRY',
    tagline: 'Real-time medical intelligence platform.',
    description: 'Synchronized telemetry dashboard and predictive patient care dispatch system engineered for emergency response units and hospital triage.',
    year: '2025',
    techStack: ['Next.js', 'WebSockets', 'HIPAA Shield', 'Tailwind', 'PostgreSQL'],
    geometricType: 'columns',
  },
  {
    id: 'sea-guardians',
    number: '03',
    romanNumeral: 'III',
    title: 'SEA GUARDIANS',
    category: 'AUTONOMOUS ECOLOGY',
    tagline: 'Smart autonomous water surface cleaning system.',
    description: 'Hardware-to-cloud telemetry and pathfinding robotics orchestration platform targeting municipal water waste interception.',
    year: '2026',
    techStack: ['Robotics IoT', 'Rust', 'Cloud Infrastructure', 'Mapbox GL'],
    geometricType: 'intersecting',
  },
  {
    id: 'espace',
    number: '04',
    romanNumeral: 'IV',
    title: 'ESPACE',
    category: 'DEVELOPER WORKSPACE',
    tagline: 'Productivity platform for students and builders.',
    description: 'A focused, distraction-free environment that unifies task graphs, terminal sessions, markdown thought logs, and peer collaboration.',
    year: '2026',
    techStack: ['React', 'Electron', 'SQLite', 'CRDTs', 'Vite'],
    geometricType: 'arch',
  },
];
