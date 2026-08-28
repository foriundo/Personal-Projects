import Section from '@/components/Section';
import { experience, education } from '@/lib/data';

const orderedEducation = [...education].sort((a, b) =>
  a.degree.includes('Master') ? -1 : b.degree.includes('Master') ? 1 : 0
);

export default function Experience() {
  return (
    <Section id="experience">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <ol className="mt-6 space-y-8">
          {experience.map((item) => (
            <li key={item.company} className="border-l border-border pl-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{item.role} · {item.company}</h3>
                <span className="text-xs opacity-60">{item.period}</span>
              </div>
              <ul className="mt-2 list-disc pl-5 opacity-80 text-sm space-y-1">
                {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold tracking-tight mt-16">Education</h2>
        <ol className="mt-6 space-y-4">
          {orderedEducation.map((item) => (
            <li key={item.degree} className="border-l border-border pl-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{item.degree}</h3>
                <span className="text-xs opacity-60">{item.period}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
