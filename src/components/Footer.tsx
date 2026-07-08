export default function Footer() {
  return (
    <footer className="pt-10 pb-10 sm:pt-14 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3 text-center sm:text-left">
          <div>
            <span className="font-heading text-xl text-white uppercase">Kickabout</span>
            <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-[26ch] mx-auto sm:mx-0">
              Mixed-reality football. Real ball, real match, play online.
            </p>
          </div>

          <div className="sm:text-center">
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">
              Find us
            </span>
            <address className="not-italic text-sm text-white/60 leading-relaxed">
              Phoenix Buildings, First Floor<br />
              Heywood Road, Prestwich<br />
              M25 1FN
            </address>
          </div>

          <div className="sm:text-right">
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">
              Get in touch
            </span>
            <a
              href="mailto:darren@kickabout.game"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              darren@kickabout.game
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Kickabout. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
