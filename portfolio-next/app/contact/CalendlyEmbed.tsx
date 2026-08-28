"use client";
import { useEffect, useRef } from 'react';

const WIDGET_SRC = 'https://assets.calendly.com/assets/external/widget.js';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function CalendlyEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const initWidget = () => {
      container.innerHTML = '';
      window.Calendly?.initInlineWidget({ url, parentElement: container });
    };

    if (window.Calendly) {
      initWidget();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SRC}"]`);
    if (existingScript) {
      existingScript.addEventListener('load', initWidget, { once: true });
      return () => existingScript.removeEventListener('load', initWidget);
    }

    const script = document.createElement('script');
    script.src = WIDGET_SRC;
    script.async = true;
    script.addEventListener('load', initWidget, { once: true });
    document.body.appendChild(script);
  }, [url]);

  return <div ref={containerRef} className="mt-4" style={{ minWidth: '320px', height: '700px' }} />;
}
