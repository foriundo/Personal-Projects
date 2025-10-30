import Section from '@/components/Section';
import Link from 'next/link';

export default function Hero() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <p className="text-sm uppercase tracking-widest opacity-60">Hello, I’m Fernando</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
          Building delightful web experiences
        </h1>
        <p className="mt-6 text-balance mx-auto max-w-2xl opacity-80">
          I’m a frontend engineer focused on crafting fast, accessible interfaces with a minimalist touch.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="#projects" className="rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-2 text-sm">
            View Projects
          </Link>
          <Link href="#contact" className="rounded-md border border-border px-5 py-2 text-sm">
            Contact Me
          </Link>
        </div>
      </div>
    </Section>
  );
}
