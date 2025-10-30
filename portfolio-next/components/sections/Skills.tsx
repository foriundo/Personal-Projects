import Section from '@/components/Section';
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <Section id="skills">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="text-sm px-3 py-1 rounded-full border border-border">
              {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
