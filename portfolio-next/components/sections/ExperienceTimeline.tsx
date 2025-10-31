"use client";
import Section from '@/components/Section';
import { experience } from '@/lib/data';

export default function ExperienceTimeline() {
  return (
    <Section id="experience-timeline">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Timeline</h2>
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border" />

          <ol className="relative z-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {experience.map((item, index) => (
              <li key={`${item.company}-${index}`} className="flex-1 min-w-0">
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                  {/* Dot */}
                  <div className="relative w-4 h-4 rounded-full bg-black dark:bg-white ring-4 ring-background md:mb-2" />
                  <div className="min-w-0">
                    <p className="text-sm opacity-60">{item.period}</p>
                    <p className="font-medium truncate">{item.role} · {item.company}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}


