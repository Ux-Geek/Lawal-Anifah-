import { motion } from "motion/react";
import { Section } from "../components/Layout";
import { TiltCard } from "../components/TiltCard";
import { Mail, Calendar, Slack, MessageSquare, ArrowRight } from "lucide-react";

export function Footer() {
  const tools = [
    { name: "Slack", icon: Slack },
    { name: "Google Workspace", icon: Calendar },
    { name: "AI Productivity", icon: MessageSquare },
    { name: "Project Tracking", icon: ArrowRight }
  ];

  return (
    <Section className="!justify-start">
      <div className="space-y-24">
        <div className="space-y-12">
          <h4 className="text-xs tracking-[0.2em] uppercase text-brand-gold">Digital Stack</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 border border-brand-green/10 rounded-sm flex flex-col items-center gap-4 text-center group hover:border-brand-gold/30 transition-colors"
              >
                <tool.icon className="w-6 h-6 text-brand-green/40 group-hover:text-brand-gold transition-colors" />
                <span className="text-xs tracking-widest uppercase">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <footer className="pt-24 border-t border-brand-green/10">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-ark">Lawal Anifah</h2>
              <p className="text-sm text-brand-green/60 leading-relaxed">
                Building bridges between vision and reality. Based in the intersection of precision and strategy.
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
                      src={`https://picsum.photos/seed/anifah-${i}/600/800`} 
                      alt={`Gallery ${i}`} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.3em] uppercase text-brand-green/40">
            <span>© 2026 Lawal Anifah</span>
            <span>A Wearable Return</span>
            <span>Built with Intent</span>
          </div>
        </footer>
      </div>
    </Section>
  );
}
