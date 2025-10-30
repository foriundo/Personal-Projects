"use client";
import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import Section from '@/components/Section';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'contact'>('about');

  return (
    <>
      <Hero />

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center gap-6 border-b border-border">
          {(
            [
              { key: 'about', label: 'About' },
              { key: 'experience', label: 'Experience' },
              { key: 'contact', label: 'Contact' },
            ] as const
          ).map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`py-3 text-sm ${
                activeTab === t.key
                  ? 'font-medium border-b-2 border-current'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'about' && (
        <Section>
          <div className="mx-auto max-w-3xl px-4 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
            <p className="mt-4 opacity-80">
              An Engineer with a passion for building products that help people live better lives.
            </p>
          </div>
        </Section>
      )}

      {activeTab === 'experience' && (
        <div>
          <Skills />
          <Experience />
          <Projects />
        </div>
      )}

      {activeTab === 'contact' && (
        <Section>
          <div className="mx-auto max-w-3xl px-4 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 opacity-80">lets connect</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:your.email@example.com"
                className="rounded-md border border-border p-4 flex items-center gap-3 hover:opacity-100 opacity-90"
              >
                <img src="/icons/mail.svg" alt="Email" width="20" height="20" />
                <span className="text-sm">your.email@example.com</span>
              </a>
              <a
                href="https://linkedin.com/in/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border p-4 flex items-center gap-3 hover:opacity-100 opacity-90"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" width="20" height="20" />
                <span className="text-sm">linkedin.com/in/your-handle</span>
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
      )}
    </>
  );
}
