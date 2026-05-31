import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import { motion, AnimatePresence } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const linksEn = [
  { label: "About", href: "#about" },
  { label: "My World", href: "#world" },
  { label: "Experience", href: "#experience" },
  { label: "Journal", href: "#journal" },
  { label: "Perfumes", href: "#perfumes" },
  { label: "Contact", href: "#contact" },
];

const linksFr = [
  { label: "À propos", href: "#about" },
  { label: "Mon Univers", href: "#world" },
  { label: "Expérience", href: "#experience" },
  { label: "Journal", href: "#journal" },
  { label: "Parfums", href: "#perfumes" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const links = language === 'fr' ? linksFr : linksEn;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'fr' 
      ? "Hiba Lahceni | Marketing Stratégique & Digital" 
      : "Hiba Lahceni | Strategic & Digital Marketing";
  }, [language]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300); // Wait for menu to close before scrolling
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-700 mix-blend-difference text-white"
        style={{
          paddingTop: scrolled ? "1.25rem" : "2rem",
          paddingBottom: scrolled ? "1.25rem" : "2rem",
        }}
      >
        <button
          onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="group relative z-50"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "1.1rem",
            fontWeight: 500,
            letterSpacing: "0.28em",
            color: "#FFFFFF",
          }}
        >
          HIBA LAHCENI
        </button>

        <div className="flex items-center gap-6 md:gap-10 z-50">
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.08, ease: EASE }}
              onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
              className="relative group overflow-hidden"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.58rem",
                fontWeight: 500,
                letterSpacing: "0.3em",
                color: "rgba(255,255,255,0.7)",
                textTransform: "uppercase",
                transition: "color 0.4s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                {link.label}
              </span>
              <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] text-white">
                {link.label}
              </span>
            </motion.button>
          ))}
          </nav>

          <div className="relative z-50 flex items-center gap-4">
            <button
              onClick={() => setLanguage('en')}
              className="relative py-1.5 transition-colors duration-500"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.55rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                color: language === 'en' ? '#FFFFFF' : 'rgba(255,255,255,0.4)',
              }}
            >
              EN
              {language === 'en' && (
                <motion.div
                  layoutId="activeLang"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#B79E7C]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className="relative py-1.5 transition-colors duration-500"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.55rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                color: language === 'fr' ? '#FFFFFF' : 'rgba(255,255,255,0.4)',
              }}
            >
              FR
              {language === 'fr' && (
                <motion.div
                  layoutId="activeLang"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#B79E7C]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          </div>

          <button
            className="md:hidden flex flex-col items-end justify-center gap-1.5 py-2 w-8 h-8 z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className="block h-[1px] bg-[#FFFFFF] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-right"
            style={{ 
              width: menuOpen ? "1.2rem" : "1.5rem", 
              transform: menuOpen ? "rotate(-45deg) translateY(0px)" : "none" 
            }}
          />
          <span
            className="block h-[1px] bg-[#FFFFFF] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ 
              width: "1.5rem", 
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? "translateX(10px)" : "none"
            }}
          />
          <span
            className="block h-[1px] bg-[#FFFFFF] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-right"
            style={{ 
              width: menuOpen ? "1.2rem" : "1rem", 
              transform: menuOpen ? "rotate(45deg) translateY(0px)" : "none" 
            }}
          />
        </button>
      </div>
    </motion.header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8 sm:px-16"
            style={{ background: "#050505" }}
          >
            {/* Ambient Background Glow */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: "radial-gradient(circle at 80% 20%, rgba(183,158,124,0.4), transparent 50%)"
              }}
            />

            <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: EASE }}
                  className="w-full"
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group w-full flex items-center justify-between border-b border-white/10 pb-4"
                  >
                    <div className="flex items-center gap-6">
                      <span 
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.65rem",
                          fontWeight: 300,
                          color: "rgba(183,158,124,0.6)",
                          letterSpacing: "0.2em"
                        }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                          fontSize: "clamp(2rem, 8vw, 3.5rem)",
                          fontWeight: 300,
                          color: "#FFFFFF",
                          letterSpacing: "0.02em",
                          textTransform: "uppercase"
                        }}
                        className="group-hover:text-[#B79E7C] transition-colors duration-400 text-left"
                      >
                        {link.label}
                      </span>
                    </div>
                    {/* Arrow Icon */}
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 40 40" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 stroke-[#B79E7C]"
                    >
                      <path d="M10 30L30 10M30 10H14M30 10V26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Bottom Menu Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-10 left-8 right-8 flex justify-between items-end border-t border-white/10 pt-6"
            >
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", fontWeight: 400, color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {language === 'fr' ? 'Me Contacter' : 'Get in Touch'}
                </p>
                <a href="mailto:hiba_lahceni7@icloud.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: "1rem", color: "#FFFFFF" }}>
                  hiba_lahceni7@icloud.com
                </a>
              </div>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/hiba-lahceni-ab9234275/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", fontWeight: 400, color: "rgba(255,255,255,0.6)", letterSpacing: "0.2em", textTransform: "uppercase" }}>IN</a>
                <a href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", fontWeight: 400, color: "rgba(255,255,255,0.6)", letterSpacing: "0.2em", textTransform: "uppercase" }}>IG</a>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
