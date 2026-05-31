import { useState } from "react";
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

const interestsEn = [
  {
    img: "/images/beyond_pilates_v2_1780249403969.png",
    label: "Pilates",
    desc: "A dedication to mindful movement, precision, and physical balance."
  },
  {
    img: "/images/beyond_yoga_v2_1780249417743.png",
    label: "Yoga & Mindfulness",
    desc: "Cultivating inner stillness and a serene approach to the chaos of the industry."
  },
  {
    img: "/images/beyond_fashion_v2_1780249434119.png",
    label: "Haute Couture",
    desc: "An endless fascination with architectural fabrics and the artistry of high fashion."
  },
  {
    img: "/images/beyond_lifestyle_v2_1780249460621.png",
    label: "Luxury Lifestyle",
    desc: "Curating a life surrounded by elevated aesthetics, art, and refined spaces."
  },
];

const interestsFr = [
  {
    img: "/images/beyond_pilates_v2_1780249403969.png",
    label: "Pilates",
    desc: "Un dévouement au mouvement en pleine conscience, à la précision et à l'équilibre physique."
  },
  {
    img: "/images/beyond_yoga_v2_1780249417743.png",
    label: "Yoga & Pleine Conscience",
    desc: "Cultiver le calme intérieur et une approche sereine face au chaos de l'industrie."
  },
  {
    img: "/images/beyond_fashion_v2_1780249434119.png",
    label: "Haute Couture",
    desc: "Une fascination infinie pour les tissus architecturaux et le savoir-faire de la haute couture."
  },
  {
    img: "/images/beyond_lifestyle_v2_1780249460621.png",
    label: "Style de Vie",
    desc: "Cultiver une vie entourée d'esthétique élevée, d'art et d'espaces raffinés."
  },
];

export function BeyondSection() {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const interests = language === 'fr' ? interestsFr : interestsEn;

  return (
    <section style={{ background: "#FAFAFA", padding: "12rem 0", position: "relative" }}>
      <div className="max-w-7xl mx-auto px-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.55rem",
              fontWeight: 500,
              letterSpacing: "0.4em",
              color: "#B79E7C",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            {language === 'fr' ? 'Chapitre 05' : 'Chapter 05'}
          </motion.p>
          <LineMask delay={0.1}>
            <h2
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
                fontWeight: 400,
                lineHeight: 0.88,
                color: "#000000",
                letterSpacing: "-0.01em",
              }}
            >
              {language === 'fr' ? 'Au-delà' : 'Beyond'}
            </h2>
          </LineMask>
          <LineMask delay={0.2}>
            <h2
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
                fontWeight: 400,
                lineHeight: 0.88,
                color: "#000000",
                letterSpacing: "-0.01em",
                fontStyle: "italic",
              }}
            >
              {language === 'fr' ? 'du Marketing' : 'Marketing'}
            </h2>
          </LineMask>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 400,
            lineHeight: 1.95,
            color: "rgba(0,0,0,0.6)",
            maxWidth: "24rem",
          }}
          className="md:text-right"
        >
          {language === 'fr' ? "Le branding de luxe est profondément lié au style de vie. Mes passions pour le bien-être, la haute couture et la pleine conscience façonnent ma manière de concevoir l'expérience de marque." : "Luxury branding is deeply connected with lifestyle. My passions in wellness, haute couture, and mindful living inform how I shape brand experiences."}
        </motion.p>
      </div>

      {/* Accordion Layout */}
      <div className="max-w-[95%] mx-auto h-[65vh] min-h-[500px] flex gap-2 md:gap-4 px-2 md:px-0">
        {interests.map((item, i) => {
          // If no item is hovered, all have equal flex basis. 
          // If hovered, the active one expands significantly, others shrink.
          const isActive = hoveredIndex === i;
          const isAnyHovered = hoveredIndex !== null;

          return (
            <motion.div
              key={item.label}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1, 
                ease: EASE 
              }}
              className="relative overflow-hidden rounded-md cursor-pointer group flex-shrink-0"
              style={{
                flex: isActive ? "8 1 0%" : isAnyHovered ? "1 1 0%" : "2 1 0%",
                transition: "flex 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <ImageWithFallback
                src={item.img}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out"
                style={{
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                  filter: isActive ? "brightness(0.85)" : "brightness(0.6) grayscale(20%)",
                  transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
              
              {/* Vertical Title (when not hovered/collapsed) */}
              <div 
                className={`absolute inset-0 flex flex-col justify-end p-6 md:p-10 transition-opacity duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <p
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.4em",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                  className="whitespace-nowrap hidden md:block"
                >
                  {item.label}
                </p>
                {/* Mobile version */}
                <p className="md:hidden text-white font-serif text-sm italic">{`0${i + 1}`}</p>
              </div>

              {/* Expanded Content (when hovered/active) */}
              <div 
                className={`absolute inset-0 flex flex-col justify-end p-6 md:p-12 transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                }}
              >
                <div className="w-12 h-[1px] bg-[#B79E7C] mb-6" />
                <h3
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    marginBottom: "1rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.7)",
                    maxWidth: "24rem",
                  }}
                  className="hidden md:block"
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
