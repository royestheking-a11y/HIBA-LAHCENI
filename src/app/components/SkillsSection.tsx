import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
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

const skillsEn = [
  "Marketing Strategy",
  "Brand Positioning",
  "Market Research",
  "Consumer Insights",
  "Content Creation",
  "Social Media Mgt",
  "Newsletter Writing",
  "Website Audits",
  "Canva Design",
  "Benchmarking",
  "Community Mgt",
  "Brand Storytelling",
  "Digital Comm.",
];

const skillsFr = [
  "Stratégie Marketing",
  "Positionnement",
  "Étude de Marché",
  "Insights Conso.",
  "Création de Contenu",
  "Gestion Réseaux Sociaux",
  "Rédaction Newsletters",
  "Audits de Site",
  "Design Canva",
  "Benchmarking",
  "Gestion Communauté",
  "Storytelling Marque",
  "Comm. Digitale",
];

const languagesEn = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Advanced" },
  { name: "English", level: "Advanced" },
];

const languagesFr = [
  { name: "Arabe", level: "Maternelle" },
  { name: "Français", level: "Avancé" },
  { name: "Anglais", level: "Avancé" },
];

export function SkillsSection() {
  const { language } = useLanguage();
  const skills = language === 'fr' ? skillsFr : skillsEn;
  const languages = language === 'fr' ? languagesFr : languagesEn;
  return (
    <section className="relative py-[12rem] px-[2.5rem] overflow-hidden" style={{ background: "#050505" }}>
      
      {/* Premium Cinematic Background: Blurred Gold Silk Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        >
          <ImageWithFallback
            src="/images/beyond_fashion_v2_1780249434119.png"
            alt="Gold Silk Texture"
            className="w-full h-full object-cover opacity-30"
            style={{ filter: "blur(40px) brightness(0.6)" }}
          />
        </motion.div>
        {/* Vignette Overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at center, transparent 0%, #050505 100%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.4em",
              color: "#B79E7C",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            {language === 'fr' ? 'Les Compétences' : 'The Capabilities'}
          </motion.p>
          <LineMask delay={0.1}>
            <h2
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 300,
                lineHeight: 0.9,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
              }}
            >
              {language === 'fr' ? 'Expertise & Communication' : 'Expertise & Communication'}
            </h2>
          </LineMask>
        </div>

        {/* Premium Bento Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Main Skills Glass Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="lg:col-span-2 relative overflow-hidden rounded-2xl group p-8 md:p-12 lg:p-16"
            style={{
              background: "rgba(20, 18, 16, 0.4)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(183, 158, 124, 0.15)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B79E7C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h3 
              className="mb-10 relative z-10"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "2rem",
                fontWeight: 300,
                color: "#FFFFFF",
                borderBottom: "1px solid rgba(183, 158, 124, 0.2)",
                paddingBottom: "1rem"
              }}
            >
              {language === 'fr' ? 'Compétences' : 'Core'} <span className="italic text-[#B79E7C]">{language === 'fr' ? 'Clés' : 'Skills'}</span>
            </h3>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 relative z-10">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ y: -3, backgroundColor: "rgba(183,158,124,0.15)", borderColor: "rgba(183,158,124,0.4)" }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    color: "#FFFFFF",
                    padding: "0.7rem 1.2rem",
                    borderRadius: "100px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    cursor: "default"
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages Stack */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15, ease: EASE }}
                className="relative overflow-hidden rounded-2xl group flex-1 flex flex-col justify-center p-8 md:p-10 lg:p-12"
                style={{
                  background: "rgba(20, 18, 16, 0.4)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(183, 158, 124, 0.15)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
              >
                {/* Dynamic corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B79E7C]/10 rounded-full blur-[40px] group-hover:bg-[#B79E7C]/20 transition-colors duration-700" />
                
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 400,
                    letterSpacing: "0.3em",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {lang.level}
                </p>
                <h3
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "#FFFFFF",
                  }}
                  className="group-hover:text-[#B79E7C] transition-colors duration-500"
                >
                  {lang.name}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
