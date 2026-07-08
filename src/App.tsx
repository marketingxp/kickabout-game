/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-cta selection:text-white">
      <main>
        <Hero />
        {/* Single section: body copy, CTA and footer share one smooth gradient */}
        <section className="bg-[linear-gradient(to_bottom,var(--color-surface)_0%,var(--color-surface)_25%,var(--color-surface-light)_60%,var(--color-primary)_100%)]">
          <About />
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}
