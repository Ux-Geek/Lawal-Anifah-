/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Section, WordReveal } from "./components/Layout";
import { TiltCard } from "./components/TiltCard";
import { Mail, Calendar, Slack, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <main className="selection:bg-brand-gold selection:text-brand-green">
      {/* SECTION 1 — ENTRY */}
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

      {/* SECTION 2 — IDENTITY */}
      <Section dark>
        <div className="space-y-12">
          <div className="space-y-4">
            <WordReveal 
              text="distance changes your surroundings" 
              className="text-3xl md:text-4xl leading-relaxed opacity-80"
            />
            <WordReveal 
              text="not your origin" 
              className="text-3xl md:text-4xl leading-relaxed"
              delay={1}
            />
          </div>
          
          <div className="pt-12">
            <WordReveal 
              text="there is a place that exists in you" 
              className="text-xl md:text-2xl leading-relaxed italic text-brand-gold"
              delay={2}
            />
            <WordReveal 
              text="without asking permission" 
              className="text-xl md:text-2xl leading-relaxed italic text-brand-gold"
              delay={2.5}
            />
          </div>
        </div>
      </Section>

      {/* SECTION 3 — IMAGINARY */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <WordReveal 
              text="imaginary is not a place" 
              className="text-4xl md:text-5xl leading-tight"
            />
            <WordReveal 
              text="it is how you return" 
              className="text-2xl md:text-3xl opacity-70"
              delay={0.8}
            />
            <WordReveal 
              text="without moving" 
              className="text-2xl md:text-3xl opacity-70"
              delay={1.2}
            />
          </div>
          
          <div className="flex justify-center md:justify-end">
            <TiltCard className="w-64 h-80 bg-brand-green/5 rounded-sm overflow-hidden border border-brand-green/10">
              <img 
                src="https://picsum.photos/seed/anifah/800/1000" 
                alt="Lawal Anifah" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </TiltCard>
          </div>
        </div>
      </Section>

      {/* TRANSITION */}
      <Section className="min-h-[50vh] flex items-center justify-center">
        <WordReveal 
          text="and sometimes... you build it" 
          className="text-xl md:text-2xl tracking-widest uppercase text-brand-gold"
        />
      </Section>

      {/* PORTFOLIO CONTENT — THE BRIDGE */}
      <Section dark className="!justify-start">
        <div className="space-y-16">
          <header className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-ark text-brand-white"
            >
              Lawal Anifah
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-brand-gold tracking-[0.2em] uppercase text-sm"
            >
              Executive Assistant
            </motion.p>
            <div className="h-px w-24 bg-brand-gold/30 mt-8" />
          </header>

          <div className="max-w-2xl space-y-8">
            <h3 className="text-2xl md:text-3xl text-brand-white leading-snug">
              The Bridge Between Strategy and Execution.
            </h3>
            <p className="text-brand-white/70 leading-relaxed text-lg">
              I specialize in high-stakes operational support, financial reconciliation, and supply chain logistics. With five years of experience managing complex documentation and multi-million dollar transactions, I ensure that executive leadership stays focused on growth while I handle the precision of the operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-12">
            <div className="space-y-8">
              <h4 className="text-xs tracking-[0.2em] uppercase text-brand-gold">Core Expertise</h4>
              <ul className="space-y-6">
                {[
                  { title: "Financial Integrity", desc: "Reconciling multi-million dollar supplier payments with 100% accuracy." },
                  { title: "Logistics Optimization", desc: "Coordinating complex waybill systems and streamlining truck turnaround times." },
                  { title: "Inventory Control", desc: "Maintaining rigorous oversight of high-volume cash crop exports." },
                  { title: "Strategic Liaison", desc: "Central point of contact between quality control, warehouse, and executive suite." }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold mt-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <span className="block text-brand-white font-medium mb-1">{item.title}</span>
                        <span className="text-sm text-brand-white/50 leading-relaxed">{item.desc}</span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs tracking-[0.2em] uppercase text-brand-gold">Experience</h4>
              <div className="space-y-8">
                <div className="border-l border-brand-gold/20 pl-6 space-y-4">
                  <div>
                    <h5 className="text-brand-white text-lg">Administrative Assistant</h5>
                    <p className="text-brand-gold/60 text-sm">Famarish Multi Service Global Limited</p>
                    <p className="text-xs text-brand-white/30 mt-1">March 2021 – March 2026</p>
                  </div>
                  <p className="text-sm text-brand-white/60 leading-relaxed">
                    Led end-to-end logistics and financial documentation for global exports. I turned logistical bottlenecks into streamlined workflows, ensuring that every shipment moved on time and every dollar was accounted for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* DIGITAL STACK & FOOTER */}
      <Section className="!justify-start">
        <div className="space-y-24">
          <div className="space-y-12">
            <h4 className="text-xs tracking-[0.2em] uppercase text-brand-gold">Digital Stack</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Slack", icon: Slack },
                { name: "Google Workspace", icon: Calendar },
                { name: "AI Productivity", icon: MessageSquare },
                { name: "Project Tracking", icon: ArrowRight }
              ].map((tool, i) => (
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
    </main>
  );
}

