import { motion } from "motion/react";
import { Section, WordReveal } from "../components/Layout";

export function Hero() {
  return (
    <Section className="relative overflow-hidden">
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-xs tracking-[0.3em] uppercase text-brand-gold mb-24 font-sans"
        >
          Imaginary — Lawal Anifah
        </motion.h1>
        
        <div className="space-y-4">
          <WordReveal 
            text="leadership is a lonely volume." 
            className="text-4xl md:text-5xl lg:text-5xl leading-tight"
          />
        </div>

        <div className="mt-12 space-y-4">
          <WordReveal 
            text="too many voices." 
            className="text-2xl md:text-3xl opacity-60"
            delay={1}
          />
          <WordReveal 
            text="too little time." 
            className="text-2xl md:text-3xl opacity-60"
            delay={1.5}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="mt-24 text-brand-gold italic text-xl md:text-2xl"
        >
          you need a filter.
        </motion.div>
      </div>
    </Section>
  );
}
