export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center gap-5 mb-4">
          <a
            href="https://www.linkedin.com/in/faoriundo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" width="24" height="24" className="grayscale" />
          </a>
          <a
            href="https://github.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src="/icons/github.svg" alt="GitHub" width="24" height="24" />
          </a>
        </div>
        <div className="text-sm text-center opacity-70">
          © {new Date().getFullYear()} Fernando Oriundo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
