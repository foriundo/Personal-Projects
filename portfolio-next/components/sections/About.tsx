import Section from '@/components/Section';

export default function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
        <p className="mt-4 opacity-80">
          An Engineer with a passion for building products that help people live better lives.
        </p>
      </div>
    </Section>
  );
}
