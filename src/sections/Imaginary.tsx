import { Section, WordReveal } from "../components/Layout";
import { TiltCard } from "../components/TiltCard";

export function Imaginary() {
  return (
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
  );
}
