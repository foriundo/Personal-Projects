import type { Project } from '@/components/cards/ProjectCard';
import type { BlogMeta } from '@/components/cards/BlogCard';

export const skills: string[] = [
  'Python',
  'Java',
  'JavaScript',
  'SQL',
  'Bash',
  'REST APIs',
  'Microservices',
  'Service-to-Service Automation',
  'Concurrency/Multithreading',
  'PostgreSQL/SQL',
  'Redis',
  'AWS (EC2, S3, CLI)',
  'Terraform',
  'Helm',
  'Docker',
  'Kubernetes',
  'OpenShift',
  'Prometheus',
  'Grafana',
  'Metrics/Alerting',
  'SLI/SLO',
  'Jenkins',
  'Git',
  'BitBucket',
  'JIRA',
  'Agile/Scrum',
];

export const experience: { company: string; role: string; period: string; bullets: string[] }[] = [
  {
    company: 'Northrop Grumman',
    role: 'Software Engineer',
    period: 'December 2023 — Present',
    bullets: [
      'Engineered a Retrieval-Augmented Generation feature with a BYOK architecture for OpenShift, integrating internal documentation with configurable LLM backends to deliver grounded, source cited responses.',
      'Re-architected the container CVE scanning workflow by rebuilding ingestion and alert-classification logic, stabilizing daily scans across 200+ internal container images and reducing false-positive alerts by 30%.',
      'Designed and shipped RESTful backend microservices that replaced manual operator steps with service-to-service automation, eliminating ~10 hours of manual effort per sprint across platform teams.',
      'Built Prometheus/Grafana observability aggregating metrics from 8 internal tools into unified dashboards, cutting mean incident-investigation time from ~2 hours to ~10 minutes for the platform on-call rotation.',
      'Automated build-to-deploy pipelines in Jenkins, containerizing services and pushing images to OpenShift with automated rollouts, cutting release time and eliminating manual deployment errors.',
      'Served as a platform point-of-contact for teams onboarding onto OpenShift, diagnosing configuration and deployment errors and standardizing project setup to reduce onboarding friction across teams.',
      'Developed a JavaScript customer portal consuming backend services to surface SLAs, SLOs, runbooks, and embedded media, giving 500+ internal users a single self-service interface.',
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

export const education: { degree: string; period: string }[] = [
  {
    degree: 'Bachelor of Science in Electrical Engineering',
    period: '2018 — 2022',
  },
  {
    degree: 'Master of Science in Computer Science',
    period: '2024 — 2026',
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
