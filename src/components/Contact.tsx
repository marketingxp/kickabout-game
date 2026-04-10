import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-surface to-[#0D1B69]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#1D4ED8]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white mb-4 uppercase">
            Let's Talk
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-10">
            Interested in Kickabout? We're building the team and looking for the right partners.
          </p>
          <a
            href="mailto:darren@kickabout.game"
            className="btn-neon inline-block text-white font-semibold text-lg px-10 py-4 cursor-pointer"
          >
            darren@kickabout.game
          </a>
        </motion.div>
      </div>
    </section>
  );
}
