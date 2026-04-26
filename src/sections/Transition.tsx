import { Section, WordReveal } from "../components/Layout";
import { transitionText } from "../data/portfolio";

export function Transition() {
  return (
    <Section className="min-h-[50vh] flex items-center justify-center">
      <WordReveal 
        text={transitionText}
        className="text-xl md:text-2xl tracking-[0.3em] uppercase text-brand-gold font-sans"
      />
    </Section>
  );
}
