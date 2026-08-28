import Section from '@/components/Section';
// import { projects } from '@/lib/data';
// import ProjectCard from '@/components/cards/ProjectCard';

export default function Projects() {
  return (
    <Section id="projects">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-8 text-sm opacity-60">Coming soon</p>
        {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div> */}
      </div>
    </Section>
  );
}
