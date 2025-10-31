import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';

export default function ExperiencePage() {
  return (
    <div>
      <ExperienceTimeline />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}


