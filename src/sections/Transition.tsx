import { Section, WordReveal } from "../components/Layout";

export function Transition() {
  return (
    <Section className="min-h-[50vh] flex items-center justify-center">
      <WordReveal 
        text="and sometimes... you build it" 
        className="text-xl md:text-2xl tracking-widest uppercase text-brand-gold"
      />
    </Section>
  );
}
