import { Section } from "../components/Layout";
import { TiltCard } from "../components/TiltCard";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <Section className="!justify-start !min-h-[auto] py-24 border-t border-brand-green/10">
      <div className="w-full">
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
      </div>
    </Section>
  );
}
