import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      className="relative min-h-dvh flex flex-col justify-between overflow-hidden bg-black"
    >
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/kickabout.jpg"
          alt="Kickabout mixed-reality football game - playing digital football at home with a real ball"
          className="w-full h-full object-cover object-top opacity-90"
          fetchPriority="high"
          decoding="async"
        />
        
        {/* Mixed Reality Overlays */}
        {/* Digital Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Scanning Line — uses transform (GPU-composited, no layout recalc) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <motion.div
            initial={{ y: "-10vh" }}
            animate={{ y: "110vh" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          />
        </div>

        {/* HUD Elements */}
        <div className="absolute inset-8 border border-white/10 pointer-events-none">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/40" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/40" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/40" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/40" />
        </div>
      </div>

      {/* Top: Logo + Subtitle */}
      <div className="relative z-10 text-center pt-8 sm:pt-20 px-4">
        <h1
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] text-white leading-[0.7] mb-4 uppercase animate-hero-glow"
        >
          Kickabout
        </h1>
        <motion.h2 
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl text-white tracking-[0.2em] uppercase"
        >
          Mixed - Reality Football
        </motion.h2>
      </div>

      {/* Spacer for image to breathe */}
      <div className="flex-1" />

      {/* Bottom: Tagline */}
      <div className="relative z-10 text-center px-4 pb-12 sm:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block"
        >
          <p className="font-heading text-white tracking-[0.1em] uppercase text-xl sm:text-2xl md:text-3xl lg:text-[2rem] relative">
            <span className="relative z-10">Real Ball - Real Match - Play Online</span>
            <motion.span 
              animate={{ x: [-2, 2, -2], opacity: [0, 0.3, 0] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 text-cyan-400 blur-[1px] select-none pointer-events-none"
            >
              Real Ball - Real Match - Play Online
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
