export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  highlights: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  type: string;
  github: string;
};

export const hero = {
  name: 'Lê Tuấn Anh',
  title: 'Frontend Developer',
  subtitle: 'React Developer | TypeScript | React Native',
  tagline: 'Building user-friendly web & mobile experiences while learning every day 🚀',
};

export const skills = [
  'React',
  'TypeScript',
  'React Native',
  'Tailwind CSS',
  'Framer Motion',
  'Redux',
  'Axios',
  'Flutter',
  'Ionic',
  'HTML5',
  'CSS3',
  'JavaScript',
  'Git',
];

export const experiences: ExperienceItem[] = [
  {
    company: 'MEU Solutions HCMC',
    role: 'Software Engineer',
    period: 'Jun 2025 – Present',
    bullets: [
      'Built multilingual mobile learning features with React Native and TypeScript in a private company GitLab repo.',
      'Integrated APIs using Axios and Redux state management for production workflows.',
      'Delivered responsive e-commerce and checkout experiences for real client applications.',
    ],
    highlights: ['Private GitLab production app', 'Firebase push notifications', 'Agile collaboration'],
  },
  {
    company: 'Eclo Co., Ltd.',
    role: 'Software Engineer Intern',
    period: 'Aug 2024 – Dec 2024',
    bullets: [
      'Developed cross-platform mobile interfaces with React and Ionic.',
      'Integrated Laravel APIs and improved usability across workflows.',
      'Partnered with UI/UX teams to refine product experiences.',
    ],
    highlights: ['Mobile interface development', 'API integration', 'Design collaboration'],
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Bali Driver App',
    description: 'Bilingual car rental platform for international tourists with booking and driver coordination.',
    tech: 'React • Ionic • Laravel API • Figma'.split(' • '),
    type: 'Car Rental Platform',
    github: 'https://github.com/LTBvn/ballicar',
  },
  {
    title: 'Carshop Automotive E-Commerce',
    description: 'Modern e-commerce platform for retail products built with TypeScript and intuitive shopping flows.',
    tech: 'React • TypeScript'.split(' • '),
    type: 'E-Commerce Platform',
    github: 'https://github.com/LTBvn/Carshop-Automotive-E-Commerce-Platform',
  },
  {
    title: 'LearnIP Mobile Learning',
    description: 'Learning application featuring multilingual mobile lessons, API integration, and offline-ready UI.',
    tech: 'React • Ionic • TypeScript'.split(' • '),
    type: 'Mobile Learning App',
    github: 'https://github.com/LTBvn/LearnIP-Mobile-Learning-Application',
  },
  {
    title: 'Taskapp',
    description: 'Task management app focused on simple workflows, fast interactions, and clean UI.',
    tech: 'TypeScript'.split(' • '),
    type: 'Productivity Tool',
    github: 'https://github.com/LTBvn/taskapp',
  },
  {
    title: 'Weather App',
    description: 'Live weather dashboard that displays current forecasts, conditions, and quick location lookup.',
    tech: ['JavaScript'],
    type: 'Weather Dashboard',
    github: 'https://github.com/LTBvn/Weatherapp-',
  },
  {
    title: 'App Procard',
    description: 'Retail e-commerce experience with product browsing, cart management, and checkout flows.',
    tech: 'React • TypeScript'.split(' • '),
    type: 'Marketplace App',
    github: 'https://github.com/LTBvn/App-Procard-',
  },
  {
    title: 'Kinhapp',
    description: 'Automotive marketplace app showcasing vehicles, filters, and a modern purchasing UX.',
    tech: 'Flutter • REST API'.split(' • '),
    type: 'Car Sales App',
    github: 'https://github.com/LTBvn/kinhapp',
  },
];

export const contact = {
  email: 'ltuananh662003@gmail.com',
  phone: '+84 365 660 510',
  github: 'https://github.com/LTBvn',
  linkedin: 'https://www.linkedin.com/in/tu%E1%BA%A5n-anh-l%C3%AA-785503382/',
  location: 'Ho Chi Minh City, Vietnam',
};
