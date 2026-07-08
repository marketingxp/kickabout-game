import { motion } from "motion/react";

export default function Contact() {
  return (
    <div id="contact" className="relative py-24 sm:py-32">
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
          {/* Wrapper carries the glow halo — clip-path on the button would clip its own shadow */}
          <span className="btn-neon-glow inline-block">
            <a
              href="mailto:darren@kickabout.game"
              className="btn-neon inline-block text-white font-semibold text-lg px-12 py-4 cursor-pointer"
            >
              darren@kickabout.game
            </a>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
