"use client";
import Section from '@/components/Section';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('Message sent!');
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contact">
      <div className="mx-auto max-w-xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <form className="mt-6 space-y-4" action={async (fd) => onSubmit(fd)}>
          <div>
            <label className="text-sm">Name</label>
            <input name="name" required className="mt-1 w-full rounded-md border border-border px-3 py-2 bg-transparent" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input name="email" type="email" required className="mt-1 w-full rounded-md border border-border px-3 py-2 bg-transparent" />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea name="message" required rows={5} className="mt-1 w-full rounded-md border border-border px-3 py-2 bg-transparent" />
          </div>
          <button type="submit" disabled={loading} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-2 text-sm disabled:opacity-60">
            {loading ? 'Sending…' : 'Send Message'}
          </button>
          {status && <p className="text-sm opacity-80">{status}</p>}
        </form>
      </div>
    </Section>
  );
}
