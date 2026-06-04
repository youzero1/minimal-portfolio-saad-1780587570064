import type { Project, Skill, NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce App',
    description: 'A full-featured online store with cart, checkout, and product management built with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'A productivity app to manage tasks with drag-and-drop, filters, and real-time updates.',
    tags: ['React', 'TypeScript', 'Firebase'],
    link: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A clean weather dashboard that shows current conditions and a 7-day forecast using OpenWeather API.',
    tags: ['JavaScript', 'API', 'CSS'],
    link: '#',
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'A minimal blog platform with markdown support, categories, and an admin panel.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: '#',
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'CSS / Tailwind', level: 88 },
  { name: 'PostgreSQL', level: 70 },
  { name: 'Git & GitHub', level: 80 },
];
