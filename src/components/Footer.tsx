export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 text-center sm:text-left">
        <span className="font-heading text-lg text-white uppercase">Kickabout</span>
        <address className="text-text-muted text-sm not-italic leading-relaxed sm:text-center">
          Phoenix Buildings<br />
          First Floor<br />
          Heywood Road<br />
          Prestwich<br />
          M25 1FN
        </address>
        <p className="text-text-muted text-sm">&copy; {new Date().getFullYear()} Kickabout. All rights reserved.</p>
      </div>
    </footer>
  );
}
