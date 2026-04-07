import { motion } from "motion/react";
import { Section } from "../components/Layout";
import { CheckCircle2 } from "lucide-react";

export function Bridge() {
  const expertise = [
    { title: "Logistics Mastery", desc: "Coordinating end-to-end waybills for global exports. Turning bottlenecks into port-bound flow." },
    { title: "Financial Precision", desc: "Reconciling multi-million dollar supplier accounts. Zero margin for error. 100% accuracy." },
    { title: "Strategic Liaison", desc: "The primary pulse between the warehouse, quality control, and the executive suite." }
  ];

  return (
    <Section dark className="!justify-start">
      <div className="space-y-16">
        <header className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-ark text-brand-white"
          >
            Anifah
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-brand-gold tracking-[0.2em] uppercase text-sm font-sans"
          >
            The Executive Operating System
          </motion.p>
          <div className="h-px w-24 bg-brand-gold/30 mt-8" />
        </header>

        <div className="max-w-3xl space-y-12">
          <h3 className="text-2xl md:text-3xl text-brand-white leading-snug">
            Catalogue of Impact
          </h3>
          
          <div className="space-y-12">
            <div className="border-l border-brand-gold/20 pl-6 space-y-4">
              <div>
                <h4 className="text-brand-white text-xl">The Experience</h4>
                <p className="text-brand-gold/60 text-sm font-sans">Famarish Multi Service Global · 2021 — 2026</p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              {expertise.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group max-w-2xl"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold mt-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <span className="block text-brand-white text-xl mb-2">{item.title}</span>
                      <span className="text-lg text-brand-white/60 leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
