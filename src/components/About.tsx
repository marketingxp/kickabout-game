import { motion } from "motion/react";

export default function About() {
  return (
    <section className="relative py-20 sm:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-3xl sm:text-4xl text-white mb-10 uppercase text-center"
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
          Kickabout is building a new category in gaming: mixed-reality football. For the first time, players can play a digital football match at home using a real ball. Our patented hardware replaces pressing buttons with real ball striking and body movement, turning physical play directly into live gameplay. This is a breakthrough in how football is played. It brings digital football closer to a real game experience.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="text-text-muted text-lg sm:text-xl leading-relaxed"
        >
          Kickabout has been in development for several years, with multiple generations of working prototypes. We have run extensive playtesting with children, refining the experience based on real usage and feedback. Players quickly understand and engage with the product, with strong early reactions during testing. Backed by over £1 million in funding, we are now building the team to bring Kickabout to market.
        </motion.p>
      </div>
    </section>
  );
}
