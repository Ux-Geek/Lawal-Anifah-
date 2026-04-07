import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function WordReveal({ text, className = "", delay = 0 }: WordRevealProps) {
  const words = text.split(" ");
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: "-10% 0px" });

  return (
    <div ref={container} className={`word-reveal ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ children, className = "", dark = false }: SectionProps) {
  return (
    <section
      className={`min-h-screen flex flex-col justify-center px-6 md:px-24 py-24 transition-colors duration-1000 ${
        dark ? "bg-brand-green text-brand-white" : "bg-white text-brand-green"
      } ${className}`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
