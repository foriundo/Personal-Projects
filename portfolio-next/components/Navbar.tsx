"use client";
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-center">
        <nav className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-80">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="absolute right-4 flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
