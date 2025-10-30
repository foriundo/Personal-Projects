import type { Project } from '@/components/cards/ProjectCard';
import type { BlogMeta } from '@/components/cards/BlogCard';

export const skills: string[] = [
  'Python',
  'Java',
  'C++',
  'HTML',
  'Tailwind CSS',
  'MATLAB',
  'Git',
  'Docker',
  'Kubernetes',
  'CI/CD',
  'DevSecOps',
  'Grafana',
  'Prometheus',
  'Jenkins',
  'Jira',
  'Confluence',
  'Bitbucket',
];

export const experience: { company: string; role: string; period: string; bullets: string[] }[] = [
  {
    company: 'Northrop Grumman',
    role: 'Software Engineer',
    period: 'December 2023 — Present',
    bullets: [
      'Supported Kubernetes platform engineering efforts, including node health checks, container orchestration, and Helm chart deployment for internal services.',
      'Designed RESTful APIs and integrated them into CI/CD pipelines to streamline DevSecOps workflows and enable automated deployment validation.',
      'Utilized Grafana to build system monitoring dashboards, increasing observability into platform performance and aiding proactive issue resolution.',
    ],
  },
  {
    company: 'Northrop Grumman',
    role: 'RF System Engineer',
    period: 'August 2022 — December 2023',
    bullets: [
      'Automated hardware-in-the-loop (HWIL) test procedures using custom scripts, accelerating validation cycles and reducing manual workload.',
      'Identified and corrected system-level failure points through root cause analysis of recorded waveform data, decreasing test failure rates by 25%.',
      'Delivered firmware and diagnostic enhancements that increased system stability and contributed to successful delivery of defense subsystems.',
    ],
  },
  {
    company: 'Nelson Engineering',
    role: 'Electrical Engineering Intern',
    period: 'August 2021 — February 2022',
    bullets: [
      'Developed and executed lighting designs for commercial buildings, ensuring compliance with industry standards and regulations such as IES, UL, and NFPA. Resulted in a decrease in energy consumption and an increase in overall lighting efficiency.  ',
      'Constructed budget forecasting and ROM cost estimates on electrical engineering design and construction projects worth >$1M, reducing overall material cost by 12%. ',
    ],
  },
  {
    company: 'CUMMINS INC',
    role: 'Electronic Hardware Engineering Intern',
    period: 'May 2021 — August 2021',
    bullets: [
      'Constructed a database that served as a centralized directory for data logging ECM and CTR activity. This innovative solution played a pivotal role in improving overall company-wide performance by providing valuable insights into electronic control module and counter activity. ',
      'Provided Electronic Control Modules (ECM) hardware customer support, proactively resolving issues for 600+ companies, while also addressing product warranty issues, features, and changes made. ',
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
