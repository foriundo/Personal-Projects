import Section from '@/components/Section';

export default function ContactPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-2 opacity-80">lets connect</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="mailto:foriundo@outlook.com"
            className="rounded-md border border-border p-4 flex items-center gap-3 hover:opacity-100 opacity-90"
          >
            <img src="/icons/mail.svg" alt="Email" width="20" height="20" />
            <span className="text-sm">foriundo@outlook.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/faoriundo/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border p-4 flex items-center gap-3 hover:opacity-100 opacity-90"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" width="20" height="20" className="grayscale" />
            <span className="text-sm">linkedin.com/in/faoriundo</span>
          </a>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium tracking-tight">Book a call</h3>
          <p className="mt-2 text-sm opacity-80">Schedule time to chat about opportunities or projects.</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-2 text-sm"
          >
            Book a call
          </a>
        </div>
      </div>
    </Section>
  );
}


