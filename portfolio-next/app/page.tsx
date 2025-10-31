import Section from '@/components/Section';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <p className="text-sm uppercase tracking-widest opacity-60">Hello, I'm Fernando</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
          Saxophonist, Dog lover, Software Engineer
        </h1>
        <p className="mt-6 text-balance mx-auto max-w-2xl opacity-80 text-lg">
          Software engineer passionate about building technology that solves real problems. I love learning new tools, designing clean systems, and turning ideas into working products. Whether it's experimenting with cloud tech, automation, or AI, I enjoy creating things that push my skills and make an impact.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="aspect-square rounded-lg overflow-hidden border border-border">
            <img 
              src="/about/about-1.jpg" 
              alt="About me" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden border border-border">
            <img 
              src="/about/about-2.jpg" 
              alt="About me" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden border border-border">
            <img 
              src="/about/about-3.JPG" 
              alt="About me" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden border border-border">
            <img 
              src="/about/about-4.JPEG" 
              alt="About me" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
