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
            text="you don't arrive" 
            className="text-4xl md:text-5xl lg:text-6xl leading-tight"
          />
          <WordReveal 
            text="you remember" 
            className="text-4xl md:text-5xl lg:text-6xl leading-tight"
            delay={0.5}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="mt-24 text-brand-gold/60 italic"
        >
          something in you never left
        </motion.div>
      </div>
    </Section>
  );
}
