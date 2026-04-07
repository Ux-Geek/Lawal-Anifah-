import { Section, WordReveal } from "../components/Layout";

export function Identity() {
  return (
    <Section dark>
      <div className="space-y-12">
        <div className="space-y-4">
          <WordReveal 
            text="distance is managed in miles." 
            className="text-3xl md:text-4xl leading-relaxed opacity-80"
          />
          <WordReveal 
            text="momentum is managed in details." 
            className="text-3xl md:text-4xl leading-relaxed"
            delay={1}
          />
        </div>
        
        <div className="pt-12 space-y-6">
          <WordReveal 
            text="five years of moving millions." 
            className="text-xl md:text-2xl leading-relaxed italic text-brand-gold"
            delay={2}
          />
          <WordReveal 
            text="reconciling the complex." 
            className="text-xl md:text-2xl leading-relaxed italic text-brand-gold"
            delay={2.5}
          />
          <WordReveal 
            text="silencing the noise." 
            className="text-xl md:text-2xl leading-relaxed italic text-brand-gold"
            delay={3}
          />
        </div>
      </div>
    </Section>
  );
}
