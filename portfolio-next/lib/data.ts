import type { Project } from '@/components/cards/ProjectCard';
import type { BlogMeta } from '@/components/cards/BlogCard';

export const skills: string[] = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'Framer Motion',
];

export const experience: { company: string; role: string; period: string; bullets: string[] }[] = [
  {
    company: 'Acme Corp',
    role: 'Senior Frontend Engineer',
    period: '2022 — Present',
    bullets: [
      'Led migration to Next.js 14 App Router',
      'Improved performance and accessibility scores to 95+',
    ],
  },
  {
    company: 'Globex',
    role: 'Frontend Engineer',
    period: '2020 — 2022',
    bullets: [
      'Built design system with React and Tailwind CSS',
      'Reduced bundle size by 30% via code-splitting and tree-shaking',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Minimal Portfolio',
    description: 'A clean, animated portfolio template using Next.js and Tailwind.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    href: '#',
    image: '/placeholders/project-1.jpg',
  },
  {
    title: 'Design System',
    description: 'Composable UI components with accessibility and dark mode.',
    tags: ['React', 'TypeScript', 'Storybook'],
    href: '#',
    image: '/placeholders/project-2.jpg',
  },
  {
    title: 'Blog Platform',
    description: 'Markdown blog with typography and SEO best practices.',
    tags: ['Next.js', 'MDX', 'SEO'],
    href: '#',
    image: '/placeholders/project-3.jpg',
  },
];

export const posts: BlogMeta[] = [
  {
    slug: 'hello-world',
    title: 'Hello World',
    excerpt: 'A quick hello and what to expect from this blog.',
    date: '2025-01-05',
  },
  {
    slug: 'building-a-portfolio',
    title: 'Building a Minimal Portfolio',
    excerpt: 'How to design and ship a minimal personal site.',
    date: '2025-02-12',
  },
];
