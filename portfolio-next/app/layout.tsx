import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: 'Fernando Oriundo — Portfolio', template: '%s | Fernando Oriundo' },
  description: 'Clean, minimal portfolio showcasing projects, experience, and writing.',
  openGraph: {
    title: 'Fernando Oriundo — Portfolio',
    description: 'Clean, minimal portfolio showcasing projects, experience, and writing.',
    url: 'https://example.com',
    siteName: 'Fernando Oriundo',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Portfolio OG' }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', title: 'Fernando Oriundo — Portfolio', description: 'Clean, minimal portfolio showcasing projects, experience, and writing.', images: ['/og.png'] },
  icons: { icon: '/favicon.ico' }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0f19' }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-dvh flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
