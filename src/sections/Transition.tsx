import { Section, WordReveal } from "../components/Layout";

export function Transition() {
  return (
    <Section className="min-h-[50vh] flex items-center justify-center">
      <WordReveal 
        text="the infrastructure of leadership." 
        className="text-xl md:text-2xl tracking-[0.3em] uppercase text-brand-gold font-sans"
      />
    </Section>
  );
}
