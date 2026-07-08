import { motion } from "motion/react";

export default function About() {
  return (
    <div className="relative py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-3xl sm:text-4xl text-white mb-10 pb-8 uppercase text-center max-w-[480px] mx-auto"
        >
          The Future of Football: Mixed Reality Gaming
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-text text-lg sm:text-xl leading-relaxed mb-8"
        >
          <span className="font-heading uppercase">Kickabout</span> is building a new category in gaming: mixed-reality football. For the first time, players can play a digital football match at home using a real ball. Our patented hardware replaces pressing buttons with real ball striking and body movement, turning physical play directly into live gameplay. This is a breakthrough in how football is played. It brings digital football closer to a real game experience.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="text-text-muted text-lg sm:text-xl leading-relaxed"
        >
          <span className="block font-heading text-xl sm:text-2xl text-white uppercase mb-4">The Development</span>
          The <span className="font-heading uppercase">Kickabout</span> concept has been explored and refined over several years through a series of prototype and proof-of-concept iterations. Throughout this process we have tested the concept with children to validate both the gameplay experience and the underlying technology, using their feedback to shape the product. Early testing has demonstrated strong engagement and given us confidence in the opportunity as we move into full commercial development.
        </motion.p>
      </div>
    </div>
  );
}
