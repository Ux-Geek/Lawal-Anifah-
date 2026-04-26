import { motion } from "motion/react";
import { Section } from "../components/Layout";
import { stack } from "../data/portfolio";

export function Stack() {
  return (
    <Section className="!justify-start !min-h-[auto] py-24">
      <div className="space-y-16 w-full">
        <h4 className="text-xs tracking-[0.2em] uppercase text-brand-gold font-sans">The Stack</h4>
        <div className="grid md:grid-cols-3 gap-12">
          {stack.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <group.icon className="w-5 h-5 text-brand-gold/40" />
                <h5 className="text-[10px] tracking-[0.3em] uppercase text-brand-green/60 font-sans">{group.title}</h5>
              </div>
              <div className="flex flex-col gap-2">
                {group.tools.map((tool, j) => (
                  <span key={j} className="text-xl tracking-tight text-brand-green/80">{tool}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
