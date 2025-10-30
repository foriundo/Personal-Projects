export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 text-sm text-center opacity-70">
        © {new Date().getFullYear()} Fernando Oriundo. All rights reserved.
      </div>
    </footer>
  );
}
