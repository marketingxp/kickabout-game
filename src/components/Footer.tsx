export default function Footer() {
  return (
    <footer className="border-t border-primary/10 py-8 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading text-lg text-white uppercase">Kickabout</span>
        <p className="text-text-muted text-sm">&copy; {new Date().getFullYear()} Kickabout. All rights reserved.</p>
      </div>
    </footer>
  );
}
