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

const perfumesEn = [
  {
    name: "Aurélia Paris",
    notes: "Oud & Rose",
    description: "Deep oud and midnight rose.",
    image: "/images/perfume_minimalist.png",
  },
  {
    name: "Aeterna",
    notes: "Vetiver",
    description: "Crisp and luminous opening.",
    image: "/images/perfume_marble.png",
  },
  {
    name: "Santal Noir",
    notes: "Sandalwood",
    description: "Smoky and grounded aura.",
    image: "/images/luxury_beauty.png",
  },
  {
    name: "Lumière",
    notes: "Bergamot",
    description: "Fresh and vibrant essence.",
    image: "/images/luxury_branding.png",
  }
];

const perfumesFr = [
  {
    name: "Aurélia Paris",
    notes: "Oud & Rose",
    description: "Oud profond et rose de minuit.",
    image: "/images/perfume_minimalist.png",
  },
  {
    name: "Aeterna",
    notes: "Vétiver",
    description: "Ouverture vive et lumineuse.",
    image: "/images/perfume_marble.png",
  },
  {
    name: "Santal Noir",
    notes: "Bois de Santal",
    description: "Aura fumée et enracinée.",
    image: "/images/luxury_beauty.png",
  },
  {
    name: "Lumière",
    notes: "Bergamote",
    description: "Essence fraîche et vibrante.",
    image: "/images/luxury_branding.png",
  }
];

export function NichePerfumesSection() {
  const { language } = useLanguage();
  const perfumes = language === 'fr' ? perfumesFr : perfumesEn;
  return (
    <section id="perfumes" style={{ background: "#050505", padding: "10rem 2.5rem", color: "#FFFFFF" }}>
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
                color: "#B79E7C",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              {language === 'fr' ? 'Collection Sélectionnée' : 'Curated Collection'}
            </motion.p>
            <LineMask delay={0.1}>
              <h2
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "clamp(3rem, 7vw, 6.5rem)",
                  fontWeight: 400,
                  lineHeight: 0.88,
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                }}
              >
                {language === 'fr' ? 'Parfums de Niche' : 'Niche Perfumes'}
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
              color: "rgba(255,255,255,0.6)",
              maxWidth: "22rem",
            }}
            className="md:text-right"
          >
            {language === 'fr' ? "Un voyage sensoriel à travers des fragrances rares et évocatrices. Conçu pour l'individu exigeant qui apprécie l'art de l'olfaction." : "A sensory journey through rare and evocative fragrances. Crafted for the discerning individual who appreciates the art of olfaction."}
          </motion.p>
        </div>

        {/* Perfume List */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {perfumes.map((perfume, i) => (
            <motion.div
              key={perfume.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.15, ease: EASE }}
              className="group relative"
            >
              <div className="relative overflow-hidden w-full" style={{ aspectRatio: "4/5" }}>
                <div
                  className="absolute inset-0 bg-[#111] transition-transform duration-1000 group-hover:scale-105"
                >
                  <ImageWithFallback
                    src={perfume.image}
                    alt={perfume.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
                {/* Overlay gradient */}
                <div 
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)" }}
                />
                
                <div className="absolute bottom-0 left-0 p-5 w-full flex flex-col justify-end">
                  <div className="flex flex-col gap-1 mb-3">
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.5rem",
                        letterSpacing: "0.2em",
                        color: "#B79E7C",
                        textTransform: "uppercase"
                      }}
                    >
                      {perfume.notes}
                    </span>
                    <h3 
                      style={{ 
                        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        fontSize: "1.2rem",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        lineHeight: 1.1
                      }}
                    >
                      {perfume.name}
                    </h3>
                  </div>
                  
                  <div className="overflow-hidden">
                    <motion.p 
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.7rem",
                        lineHeight: 1.5,
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 300
                      }}
                    >
                      {perfume.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
