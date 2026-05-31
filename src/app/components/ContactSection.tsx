import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

const EASE = [0.22, 1, 0.36, 1] as const;

function LineMask({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ y: "105%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const contactItems = [
  {
    label: "Email",
    value: "hiba_lahceni7@icloud.com",
    href: "mailto:hiba_lahceni7@icloud.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hiba-lahceni-ab9234275",
    href: "https://www.linkedin.com/in/hiba-lahceni-ab9234275/",
  },
];

const footerLinksEn = ["About", "My World", "Experience", "Journal"];
const footerLinksFr = ["À Propos", "Mon Univers", "Expérience", "Journal"];
const footerHrefs = ["#about", "#world", "#experience", "#journal"];

export function ContactSection() {
  const { language } = useLanguage();
  const footerLinks = language === 'fr' ? footerLinksFr : footerLinksEn;
  return (
    <section id="contact" className="relative flex flex-col" style={{ background: "#050505", minHeight: "100vh" }}>
      
      {/* Top half - massive statement */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-10 md:px-16 w-full pt-32 pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.4em",
            color: "#B79E7C",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          {language === 'fr' ? 'Collaborons' : "Let's Collaborate"}
        </motion.p>
        
        <LineMask delay={0.1}>
          <h2
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              fontWeight: 300,
              lineHeight: 1,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              maxWidth: "18ch"
            }}
          >
            {language === 'fr' ? 'Créer quelque chose' : 'Build something'}
          </h2>
        </LineMask>
        <LineMask delay={0.2}>
          <h2
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              fontWeight: 300,
              lineHeight: 1,
              color: "#B79E7C",
              letterSpacing: "-0.02em",
              fontStyle: "italic",
            }}
          >
            {language === 'fr' ? "d'Extraordinaire." : 'Extraordinary.'}
          </h2>
        </LineMask>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
          className="mt-16 flex flex-col md:flex-row justify-between items-start gap-10 border-t border-white/10 pt-10"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 2,
              color: "rgba(255,255,255,0.6)",
              maxWidth: "28rem",
            }}
          >
            {language === 'fr' ? "Ouverte aux opportunités dans le marketing du luxe, de la beauté et du lifestyle premium. Je serais ravie de discuter de la façon dont nous pouvons créer ensemble des expériences de marque significatives." : "Open to opportunities in luxury, beauty, and premium lifestyle marketing. I’d love to discuss how we can create meaningful brand experiences together."}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 2,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {language === 'fr' ? 'Basée à ' : 'Based in '}<span className="text-white">{language === 'fr' ? 'Casablanca, Maroc' : 'Casablanca, Morocco'}</span><br/>
            {language === 'fr' ? "Disponible à l'International" : 'Available Worldwide'}
          </p>
        </motion.div>
      </div>

      {/* Massive Interactive Links */}
      <div className="w-full border-t border-white/10">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative w-full border-b border-white/10 overflow-hidden"
          >
            {/* Hover Background */}
            <div className="absolute inset-0 bg-[#B79E7C] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-10 md:px-16 py-12 flex justify-between items-center">
              <span
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                }}
                className="text-white group-hover:text-black transition-colors duration-500"
              >
                {item.label}
              </span>
              
              <motion.div 
                className="flex items-center gap-4"
                initial={false}
              >
                <span 
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                  }}
                  className="hidden md:block text-white/50 group-hover:text-black/60 transition-colors duration-500"
                >
                  {item.value}
                </span>
                {/* Arrow Icon */}
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500 stroke-white group-hover:stroke-black"
                >
                  <path d="M10 30L30 10M30 10H14M30 10V26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </a>
        ))}
      </div>

      {/* Infinite Marquee */}
      <div className="w-full overflow-hidden py-6 border-b border-white/5 bg-[#030303]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {/* Repeat the text twice to create a seamless infinite scroll loop */}
          {[1, 2].map((idx) => (
            <div key={idx} className="flex gap-16 items-center pr-16">
              <span style={{ fontFamily: "'Helvetica Neue', Arial", fontSize: "1rem", fontWeight: 300, letterSpacing: "0.3em", color: "rgba(255,255,255,0.4)" }}>HIBA LAHCENI</span>
              <span className="w-2 h-2 rounded-full bg-[#B79E7C]"></span>
              <span style={{ fontFamily: "'Helvetica Neue', Arial", fontSize: "1rem", fontWeight: 300, letterSpacing: "0.3em", color: "rgba(255,255,255,0.4)" }}>{language === 'fr' ? 'BRANDING DE LUXE' : 'LUXURY BRANDING'}</span>
              <span className="w-2 h-2 rounded-full bg-[#B79E7C]"></span>
              <span style={{ fontFamily: "'Helvetica Neue', Arial", fontSize: "1rem", fontWeight: 300, letterSpacing: "0.3em", color: "rgba(255,255,255,0.4)" }}>PARIS</span>
              <span className="w-2 h-2 rounded-full bg-[#B79E7C]"></span>
              <span style={{ fontFamily: "'Helvetica Neue', Arial", fontSize: "1rem", fontWeight: 300, letterSpacing: "0.3em", color: "rgba(255,255,255,0.4)" }}>CASABLANCA</span>
              <span className="w-2 h-2 rounded-full bg-[#B79E7C]"></span>
              <span style={{ fontFamily: "'Helvetica Neue', Arial", fontSize: "1rem", fontWeight: 300, letterSpacing: "0.3em", color: "rgba(255,255,255,0.4)" }}>{language === 'fr' ? 'DUBAÏ' : 'DUBAI'}</span>
              <span className="w-2 h-2 rounded-full bg-[#B79E7C]"></span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer Bottom Links */}
      <div className="max-w-7xl mx-auto px-10 md:px-16 py-8 w-full flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 bg-[#050505]">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "1.2rem",
            fontWeight: 500,
            letterSpacing: "0.25em",
            color: "#FFFFFF",
            transition: "color 0.3s ease",
          }}
          className="hover:text-[#B79E7C]"
        >
          HIBA LAHCENI
        </button>

        <div className="flex flex-wrap justify-center gap-8">
          {footerLinks.map((item, i) => (
            <button
              key={item}
              onClick={() => document.querySelector(footerHrefs[i])?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.55rem",
                fontWeight: 400,
                letterSpacing: "0.28em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
              }}
              className="hover:text-[#B79E7C]"
            >
              {item}
            </button>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center gap-2 mt-4 md:mt-0"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.55rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.2)",
            textTransform: "uppercase"
          }}
        >
          <p>© 2026 Hiba Lahceni</p>
          <span className="hidden md:inline">·</span>
          <p>
            {language === 'fr' ? 'Design et Développement par ' : 'Design and Develop by '}
            <a 
              href="https://www.linkedin.com/in/aurangzebsunny/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#B79E7C] hover:text-white transition-colors duration-300"
              style={{ fontWeight: 500 }}
            >
              Aurangzeb sunny
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
