import Section from '@/components/Section';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden border border-border">
            <Image 
              src="/about/about-1.jpg" 
              alt="About me" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest opacity-60">About Me</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Who I Am
            </h1>
            <p className="mt-6 text-balance opacity-80 text-lg leading-relaxed">
              Software engineer passionate about building technology that solves real problems. I love learning new tools, designing clean systems, and turning ideas into working products. Whether it&apos;s experimenting with cloud tech, automation, or AI, I enjoy creating things that push my skills and make an impact.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}


