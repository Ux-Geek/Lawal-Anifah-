import { motion } from "motion/react";
import { Section } from "../components/Layout";
import { CheckCircle2 } from "lucide-react";

export function Bridge() {
  const expertise = [
    { title: "Financial Integrity", desc: "Reconciling multi-million dollar supplier payments with 100% accuracy." },
    { title: "Logistics Optimization", desc: "Coordinating complex waybill systems and streamlining truck turnaround times." },
    { title: "Inventory Control", desc: "Maintaining rigorous oversight of high-volume cash crop exports." },
    { title: "Strategic Liaison", desc: "Central point of contact between quality control, warehouse, and executive suite." }
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
              {expertise.map((item, i) => (
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
  );
}
