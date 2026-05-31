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
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const itemsEn = [
  {
    img: "/images/luxury_fashion.png",
    category: "Fashion",
    title: "Haute Couture",
    desc: "Exploring the boundaries of high fashion and editorial storytelling.",
    gridStyle: { gridColumn: "1 / 3", gridRow: "1 / 3" } as React.CSSProperties,
    titleSize: "2.5rem",
  },
  {
    img: "/images/luxury_beauty.png",
    category: "Beauty",
    title: "Olfactive Art",
    desc: "The sensory world of premium cosmetics and fragrance.",
    gridStyle: { gridColumn: "3 / 4", gridRow: "1 / 2" } as React.CSSProperties,
    titleSize: "1.4rem",
  },
  {
    img: "/images/luxury_branding.png",
    category: "Branding",
    title: "Tactile Identity",
    desc: "Crafting unforgettable packaging and retail experiences.",
    gridStyle: { gridColumn: "4 / 5", gridRow: "1 / 2" } as React.CSSProperties,
    titleSize: "1.4rem",
  },
  {
    img: "/images/luxury_consumer.png",
    category: "Psychology",
    title: "Consumer Desires",
    desc: "Understanding the emotional drivers of the luxury client.",
    gridStyle: { gridColumn: "3 / 4", gridRow: "2 / 3" } as React.CSSProperties,
    titleSize: "1.4rem",
  },
  {
    img: "/images/luxury_digital.png",
    category: "Digital",
    title: "Digital Avant-Garde",
    desc: "Merging technology with high-end aesthetic culture.",
    gridStyle: { gridColumn: "4 / 5", gridRow: "2 / 3" } as React.CSSProperties,
    titleSize: "1.4rem",
  },
];

const itemsFr = [
  {
    img: "/images/luxury_fashion.png",
    category: "Mode",
    title: "Haute Couture",
    desc: "Explorer les limites de la haute couture et du storytelling éditorial.",
    gridStyle: { gridColumn: "1 / 3", gridRow: "1 / 3" } as React.CSSProperties,
    titleSize: "2.5rem",
  },
  {
    img: "/images/luxury_beauty.png",
    category: "Beauté",
    title: "Art Olfactif",
    desc: "L'univers sensoriel des cosmétiques haut de gamme et de la parfumerie.",
    gridStyle: { gridColumn: "3 / 4", gridRow: "1 / 2" } as React.CSSProperties,
    titleSize: "1.4rem",
  },
  {
    img: "/images/luxury_branding.png",
    category: "Branding",
    title: "Identité Tactile",
    desc: "Créer des emballages inoubliables et des expériences retail.",
    gridStyle: { gridColumn: "4 / 5", gridRow: "1 / 2" } as React.CSSProperties,
    titleSize: "1.4rem",
  },
  {
    img: "/images/luxury_consumer.png",
    category: "Psychologie",
    title: "Désirs du Consommateur",
    desc: "Comprendre les moteurs émotionnels de la clientèle de luxe.",
    gridStyle: { gridColumn: "3 / 4", gridRow: "2 / 3" } as React.CSSProperties,
    titleSize: "1.4rem",
  },
  {
    img: "/images/luxury_digital.png",
    category: "Digital",
    title: "Avant-Garde Digitale",
    desc: "Fusionner la technologie avec la culture esthétique haut de gamme.",
    gridStyle: { gridColumn: "4 / 5", gridRow: "2 / 3" } as React.CSSProperties,
    titleSize: "1.4rem",
  },
];

export function MyWorldSection() {
  const { language } = useLanguage();
  const items = language === 'fr' ? itemsFr : itemsEn;
  return (
    <section id="world" style={{ background: "#FAFAFA", padding: "10rem 2.5rem" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.55rem",
                fontWeight: 400,
                letterSpacing: "0.4em",
                color: "#000000",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              {language === 'fr' ? 'Chapitre 01' : 'Chapter 01'}
            </motion.p>
            <LineMask delay={0.1}>
              <h2
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "clamp(3rem, 7vw, 6.5rem)",
                  fontWeight: 400,
                  lineHeight: 0.88,
                  color: "#000000",
                  letterSpacing: "-0.01em",
                }}
              >
                {language === 'fr' ? 'Mon Univers' : 'My World'}
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
              maxWidth: "22rem",
            }}
            className="md:text-right"
          >
            {language === 'fr' ? "Les industries, esthétiques et idées qui inspirent mon approche du marketing de luxe et du storytelling de marque." : "The industries, aesthetics, and ideas that inspire my approach to luxury marketing and brand storytelling."}
          </motion.p>
        </div>

        {/* Editorial bento grid — desktop */}
        <div
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(2, 320px)",
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.09, ease: EASE }}
              className="group relative overflow-hidden bg-[#111]"
              style={item.gridStyle}
            >
              <ImageWithFallback
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "rgba(183,158,124,0.15)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                <div className="transform transition-transform duration-700 group-hover:-translate-y-2">
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.55rem",
                      fontWeight: 500,
                      letterSpacing: "0.35em",
                      color: "#B79E7C",
                      textTransform: "uppercase",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {item.category}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontSize: item.titleSize,
                      fontWeight: 400,
                      color: "#FFFFFF",
                      lineHeight: 1.1,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
                
                <div 
                  className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                >
                  <div className="overflow-hidden">
                    <p
                      className="pt-4"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8rem",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.6,
                        maxWidth: "95%",
                        fontWeight: 300,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile grid — simple 2-column */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {items.map((item, i) => (
            <motion.div
              key={`m-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className="group relative overflow-hidden bg-[#111]"
              style={{ aspectRatio: "4/5" }}
            >
              <ImageWithFallback
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", letterSpacing: "0.28em", color: "#B79E7C", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  {item.category}
                </p>
                <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: "1.2rem", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "0.4rem" }}>
                  {item.title}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.4, fontWeight: 300, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
