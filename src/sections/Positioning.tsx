import { Section } from "../components/Layout";

export function Positioning() {
  return (
    <Section className="!justify-start !min-h-[auto] py-24 border-t border-brand-green/10">
      <div className="flex flex-col items-center text-center space-y-12 w-full">
        <div className="space-y-4">
          <span className="text-brand-gold font-sans uppercase tracking-[0.3em] text-[10px]">Positioning</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-brand-green leading-tight max-w-2xl mx-auto">
            The Executive Operating System.
          </h2>
        </div>
      </div>
    </Section>
  );
}
