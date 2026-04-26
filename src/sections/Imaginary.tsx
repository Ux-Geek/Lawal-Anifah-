import { Section, WordReveal } from "../components/Layout";
import { TiltCard } from "../components/TiltCard";
import { imaginaryText } from "../data/portfolio";

export function Imaginary() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <WordReveal 
            text={imaginaryText.bridge}
            className="text-4xl md:text-5xl leading-tight"
          />
          <WordReveal 
            text={imaginaryText.vision} 
            className="text-2xl md:text-3xl opacity-70"
            delay={0.8}
          />
          
          <div className="pt-8 space-y-4">
            <WordReveal 
              text={imaginaryText.manage} 
              className="text-2xl md:text-3xl opacity-70 italic"
              delay={1.5}
            />
            <WordReveal 
              text={imaginaryText.legacy} 
              className="text-3xl md:text-4xl text-brand-gold"
              delay={2.2}
            />
          </div>
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
  );
}
