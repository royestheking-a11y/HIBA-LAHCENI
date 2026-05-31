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

const stepsEn = [
  {
    number: "01",
    title: "Observe",
    description:
      "Understanding consumers, cultural shifts, and the subtle signals that define what luxury and beauty mean to an audience in a given moment.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Researching behavior, mapping market dynamics, and benchmarking to uncover the white space where a brand can authentically differentiate.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Translating insight into narrative—developing stories, campaigns, and editorial experiences that resonate emotionally and aesthetically.",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "Building meaningful, lasting relationships between brands and their audiences through strategic communication and genuine engagement.",
  },
];

const stepsFr = [
  {
    number: "01",
    title: "Observer",
    description:
      "Comprendre les consommateurs, les évolutions culturelles et les signaux subtils qui définissent ce que le luxe et la beauté signifient pour un public à un instant donné.",
  },
  {
    number: "02",
    title: "Analyser",
    description:
      "Rechercher les comportements, cartographier la dynamique du marché et évaluer pour découvrir l'espace libre où une marque peut se différencier de manière authentique.",
  },
  {
    number: "03",
    title: "Créer",
    description:
      "Traduire les insights en récit—développer des histoires, des campagnes et des expériences éditoriales qui résonnent émotionnellement et esthétiquement.",
  },
  {
    number: "04",
    title: "Connecter",
    description:
      "Construire des relations significatives et durables entre les marques et leurs publics grâce à une communication stratégique et un engagement authentique.",
  },
];

export function CreativeProcessSection() {
  const { language } = useLanguage();
  const steps = language === 'fr' ? stepsFr : stepsEn;
  return (
    <section style={{ background: "#050505", padding: "12rem 2.5rem", position: "relative" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between mb-24 border-b border-white/10 pb-12">
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
                marginBottom: "1.5rem",
              }}
            >
              {language === 'fr' ? 'Ma Réflexion' : 'How I Think'}
            </motion.p>
            <LineMask delay={0.1}>
              <h2
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                  fontWeight: 400,
                  lineHeight: 0.9,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                {language === 'fr' ? 'Processus' : 'Creative'}
              </h2>
            </LineMask>
            <LineMask delay={0.2}>
              <h2
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                  fontWeight: 400,
                  lineHeight: 0.9,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  fontStyle: "italic",
                }}
              >
                {language === 'fr' ? 'Créatif' : 'Process'}
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
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.7)",
              maxWidth: "26rem",
            }}
            className="lg:text-right"
          >
            {language === 'fr' ? "Le bon marketing ne se limite pas à la visibilité. Il s'agit de créer de l'émotion, du sens et des connexions durables entre les gens et les marques." : "Great marketing is not about visibility alone. It is about creating emotion, meaning, and lasting connections between people and brands."}
          </motion.p>
        </div>

        {/* Steps Grid - 2x2 on Desktop for a more spacious, elegant layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
              className="group relative flex flex-col justify-between"
              style={{
                padding: "3rem 2.5rem",
                borderRadius: "2px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* Hover Background Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "radial-gradient(circle at top right, rgba(183,158,124,0.1), transparent 70%)" }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  {/* Highly visible, elegant number */}
                  <p
                    style={{
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontSize: "3.5rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.2)",
                      lineHeight: 1,
                      transition: "color 0.6s ease",
                    }}
                    className="group-hover:text-[#B79E7C]"
                  >
                    {step.number}
                  </p>

                  {/* Decorative expanding line */}
                  <div className="w-12 h-[1px] bg-white/20 group-hover:w-24 group-hover:bg-[#B79E7C] transition-all duration-700" />
                </div>

                <div className="mt-auto">
                  <h3
                    style={{
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontSize: "clamp(2rem, 3vw, 2.5rem)",
                      fontWeight: 400,
                      color: "#FFFFFF",
                      marginBottom: "1.2rem",
                      lineHeight: 1.1,
                      transition: "color 0.5s ease",
                    }}
                  >
                    {step.title}
                  </h3>
                  
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.6)",
                      transition: "color 0.5s ease",
                    }}
                    className="group-hover:text-white/90"
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
