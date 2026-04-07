import { motion } from "motion/react";
import { Section } from "../components/Layout";
import { TiltCard } from "../components/TiltCard";
import { Mail, Zap, Brain, MessageSquare, Layout } from "lucide-react";

export function Footer() {
  const stack = [
    { title: "PRODUCTIVITY", tools: ["LINEAR", "CLICKUP", "NOTION"], icon: Layout },
    { title: "INTELLIGENCE", tools: ["CLAUDE", "CHATGPT", "GEMINI"], icon: Brain },
    { title: "COORDINATION", tools: ["SLACK", "GMAIL", "CALENDAR"], icon: Zap }
  ];

  return (
    <Section className="!justify-start">
      <div className="space-y-24 w-full">
        <div className="space-y-16">
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

        <div className="pt-24 border-t border-brand-green/10">
          <div className="flex flex-col items-center text-center space-y-12">
            <div className="space-y-4">
              <span className="text-brand-gold font-sans uppercase tracking-[0.3em] text-[10px]">Positioning</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-brand-green leading-tight max-w-2xl">
                The Executive Operating System.
              </h2>
            </div>
          </div>
        </div>

        <footer className="pt-24 border-t border-brand-green/10">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-ark">Anifah</h2>
              <p className="text-sm text-brand-green/60 leading-relaxed max-w-xs font-sans">
                Positioning Anifah as the infrastructure that allows a leader to exist.
              </p>
              <div className="flex gap-4">
                <a href="mailto:samsudeenafolabi@gmail.com" className="text-brand-gold hover:text-brand-green transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <TiltCard className="aspect-[4/5] bg-brand-green/5 rounded-sm overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/anifah-impact-${i}/600/800`} 
                      alt={`Impact ${i}`} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.3em] uppercase text-brand-green/40 font-sans">
            <span>© 2026 Lawal Anifah</span>
            <span>The Infrastructure of Leadership</span>
            <span>Built with Intent</span>
          </div>
        </footer>
      </div>
    </Section>
  );
}
