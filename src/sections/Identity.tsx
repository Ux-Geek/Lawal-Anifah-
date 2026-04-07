import { Section, WordReveal } from "../components/Layout";

export function Identity() {
  return (
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
  );
}
