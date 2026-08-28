"use client";
import Section from '@/components/Section';
import { experience, education } from '@/lib/data';

const mastersDegree = education.find((item) => item.degree.includes('Master'));
const bachelorsDegree = education.find((item) => item.degree.includes('Bachelor'));

type TimelineEntry = { label: string; period: string };

const timelineEntries: TimelineEntry[] = [
  ...(bachelorsDegree ? [{ label: bachelorsDegree.degree, period: bachelorsDegree.period }] : []),
  ...[...experience].reverse().map((item) => ({ label: `${item.role} · ${item.company}`, period: item.period })),
  ...(mastersDegree ? [{ label: mastersDegree.degree, period: mastersDegree.period }] : []),
];

export default function ExperienceTimeline() {
  return (
    <Section id="experience-timeline">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Timeline</h2>
        <div className="relative md:py-16">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border" />

          <ol className="relative z-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {timelineEntries.map((item, index) => {
              const colorClasses = [
                'bg-rose-500',
                'bg-amber-500',
                'bg-emerald-500',
                'bg-sky-500',
                'bg-violet-500',
                'bg-fuchsia-500',
              ];
              const dotColor = colorClasses[index % colorClasses.length];
              const isAbove = index % 2 === 1; // alternate labels
              return (
                <li key={`${item.label}-${index}`} className="flex-1 min-w-0 relative">
                  {/* Desktop/Large screens: alternate labels above/below */}
                  <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${dotColor} ring-4 ring-background`} />
                  <div
                    className={
                      `hidden md:block absolute left-1/2 -translate-x-1/2 w-48 text-center ` +
                      (isAbove ? 'bottom-[calc(50%+18px)]' : 'top-[calc(50%+18px)]')
                    }
                  >
                    <p className="text-xs opacity-60">{item.period}</p>
                    <p className="text-sm font-medium leading-snug">{item.label}</p>
                  </div>

                  {/* Mobile: stacked, no overlap */}
                  <div className="md:hidden flex items-center gap-3">
                    <div className={`relative w-4 h-4 rounded-full ${dotColor} ring-4 ring-background`} />
                    <div className="min-w-0">
                      <p className="text-xs opacity-60">{item.period}</p>
                      <p className="text-sm font-medium truncate">{item.label}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
