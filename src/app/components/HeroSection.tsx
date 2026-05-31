import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import hibaImg from "../../imports/Hiba_Lahceni.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full overflow-hidden bg-white text-black flex flex-col items-center"
      style={{ minHeight: "100vh", paddingTop: "12vh" }}
    >
      {/* Absolute Header Texts */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full px-6 md:px-16 flex flex-col md:flex-row justify-between items-center md:items-start gap-4 uppercase text-[0.6rem] md:text-[0.65rem] tracking-[0.2em] md:tracking-[0.3em] font-medium text-center md:text-left z-20 mix-blend-difference text-white md:text-black md:mix-blend-normal"
      >
        <div className="w-full md:max-w-[200px] leading-relaxed">
          {language === 'fr' ? 'Marketing Stratégique & Digital' : 'Strategic & Digital Marketing'} <br className="hidden md:block" />
          <span className="md:hidden"> · </span>{language === 'fr' ? 'Casablanca, Maroc' : 'Casablanca, Morocco'}
        </div>
        <div className="w-full text-center md:text-right md:max-w-[200px] leading-relaxed hidden sm:block">
          {language === 'fr' ? 'Luxe · Beauté · Branding' : 'Luxury · Beauty · Branding'} <br className="hidden md:block" />
          <span className="md:hidden"> · </span>{language === 'fr' ? 'Communication Digitale' : 'Digital Communication'}
        </div>
      </motion.div>

      {/* Massive Centered Title */}
      <div className="flex flex-col items-center justify-center mt-12 md:mt-16 mb-16 z-10 mix-blend-difference text-white w-full px-4 gap-2 md:gap-0">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-[20vw] sm:text-[16vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] md:leading-[0.8] tracking-[-0.04em] font-bold uppercase text-center whitespace-nowrap"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          HIBA
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="text-[17vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] md:leading-[0.8] tracking-[-0.04em] font-bold uppercase text-center whitespace-nowrap"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          LAHCENI
        </motion.h1>
      </div>

      {/* Hero Image Container - Stark and Structural */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="absolute bottom-0 left-[50%] transform -translate-x-1/2 w-full sm:w-[80vw] md:w-[60vw] h-[60vh] md:h-[75vh] z-0 overflow-hidden"
      >
        <motion.div style={{ y: imgY, height: "120%" }} className="w-full">
          <ImageWithFallback
            src={hibaImg}
            alt="Hiba Lahceni"
            className="w-full h-full object-cover object-top grayscale contrast-125"
            loading="eager"
            {...{ fetchpriority: "high" } as any}
          />
        </motion.div>
      </motion.div>

      {/* Minimalist CTAs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 md:bottom-12 w-full px-6 md:px-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 z-20 mix-blend-difference text-white"
      >
        <button
          onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
          className="uppercase text-[0.6rem] md:text-[0.55rem] tracking-[0.2em] md:tracking-[0.3em] font-medium border-b border-white/50 hover:border-white pb-1 hover:pb-2 transition-all duration-300"
        >
          {language === 'fr' ? 'Voir le Portfolio' : 'View Portfolio'}
        </button>
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="uppercase text-[0.6rem] md:text-[0.55rem] tracking-[0.2em] md:tracking-[0.3em] font-medium border-b border-white/50 hover:border-white pb-1 hover:pb-2 transition-all duration-300"
        >
          {language === 'fr' ? 'Me Contacter' : 'Contact Me'}
        </button>
      </motion.div>
    </section>
  );
}
