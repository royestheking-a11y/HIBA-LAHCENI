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

const educationEn = [
  {
    number: "01",
    period: "2024 — 2026",
    degree: "Master's in Strategic\n& Digital Marketing",
    institution: "Rabat Business School (UIR)",
    detail: "Digital Advertising · Brand Management · Consumer Behavior · AI in Marketing · Sales Management",
    align: "left",
    logo: "/Universite Internationale de Rabat logo.jpeg",
  },
  {
    number: "02",
    period: "2023 — 2024",
    degree: "Exchange Program",
    institution: "EBS Paris",
    detail: "Luxury Brand Strategy · Fashion Communication · International Marketing · Brand Identity",
    align: "right",
    logo: "/ebs_paris_logo.jpeg",
  },
  {
    number: "03",
    period: "2021 — 2024",
    degree: "Bachelor's in\nInternational Management",
    institution: "Rabat Business School",
    detail: "International Business Development · Strategic Management · Entrepreneurship",
    align: "left",
    logo: "/Universite Internationale de Rabat logo.jpeg",
  },
];

const educationFr = [
  {
    number: "01",
    period: "2024 — 2026",
    degree: "Master en Marketing\nStratégique & Digital",
    institution: "Rabat Business School (UIR)",
    detail: "Publicité Digitale · Gestion de Marque · Comportement du Consommateur · IA en Marketing · Gestion des Ventes",
    align: "left",
    logo: "/Universite Internationale de Rabat logo.jpeg",
  },
  {
    number: "02",
    period: "2023 — 2024",
    degree: "Programme d'Échange",
    institution: "EBS Paris",
    detail: "Stratégie de Marque de Luxe · Communication de Mode · Marketing International · Identité de Marque",
    align: "right",
    logo: "/ebs_paris_logo.jpeg",
  },
  {
    number: "03",
    period: "2021 — 2024",
    degree: "Licence en\nManagement International",
    institution: "Rabat Business School",
    detail: "Développement Commercial International · Management Stratégique · Entrepreneuriat",
    align: "left",
    logo: "/Universite Internationale de Rabat logo.jpeg",
  },
];

const certificationsEn = [
  {
    title: "Workshop – Connaissance de soi et intelligence émotionnelle",
    issuer: "UIR Rabat Business School",
    date: "Issued Oct 2025",
    logo: "/Universite Internationale de Rabat logo.jpeg",
  }
];

const certificationsFr = [
  {
    title: "Workshop – Connaissance de soi et intelligence émotionnelle",
    issuer: "UIR Rabat Business School",
    date: "Délivré en Oct 2025",
    logo: "/Universite Internationale de Rabat logo.jpeg",
  }
];

export function EducationSection() {
  const { language } = useLanguage();
  const education = language === 'fr' ? educationFr : educationEn;
  const certifications = language === 'fr' ? certificationsFr : certificationsEn;
  return (
    <section style={{ background: "#FAFAFA", padding: "12rem 2.5rem", position: "relative", overflow: "hidden" }}>
      
      {/* Decorative background element */}
      <div 
        className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full mix-blend-multiply opacity-20 pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, rgba(183,158,124,0.4) 0%, rgba(250,250,250,0) 70%)",
          transform: "translate(20%, -20%)"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-32 flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            {language === 'fr' ? 'Chapitre 03' : 'Chapter 03'}
          </motion.p>
          <LineMask delay={0.1}>
            <h2
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                fontWeight: 400,
                lineHeight: 0.9,
                color: "#000000",
                letterSpacing: "-0.02em",
              }}
            >
              {language === 'fr' ? 'Excellence' : 'Academic'}
            </h2>
          </LineMask>
          <LineMask delay={0.2}>
            <h2
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                fontWeight: 400,
                lineHeight: 0.9,
                color: "#000000",
                letterSpacing: "-0.02em",
                fontStyle: "italic",
              }}
            >
              {language === 'fr' ? 'Académique' : 'Excellence'}
            </h2>
          </LineMask>
        </div>

        {/* Asymmetrical Editorial Layout */}
        <div className="flex flex-col gap-24 md:gap-32">
          {education.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.15, ease: EASE }}
              className={`flex flex-col ${item.align === 'right' ? 'md:items-end' : 'md:items-start'} group`}
            >
              <div 
                className={`max-w-2xl w-full relative ${item.align === 'right' ? 'md:text-right' : 'md:text-left'}`}
              >
                {/* Large Background Number */}
                <div 
                  className={`absolute top-[-4rem] ${item.align === 'right' ? 'right-0' : 'left-[-1rem]'} opacity-5 text-[#B79E7C] font-serif transition-opacity duration-700 group-hover:opacity-20 pointer-events-none select-none`}
                  style={{
                    fontSize: "14rem",
                    lineHeight: 0.8,
                    fontWeight: 300,
                    zIndex: -1
                  }}
                >
                  {item.number}
                </div>

                {/* Content */}
                <div className="relative z-10 pt-4">
                  <div className={`flex items-center gap-4 mb-4 ${item.align === 'right' ? 'md:justify-end' : 'md:justify-start'}`}>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 400,
                        color: "#B79E7C",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.period}
                    </p>
                    <div className="w-12 h-[1px] bg-[#B79E7C] opacity-50" />
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontSize: "clamp(2rem, 4vw, 3.2rem)",
                      fontWeight: 400,
                      lineHeight: 1.1,
                      color: "#000000",
                      marginBottom: "1rem",
                      whiteSpace: "pre-line",
                      transition: "all 0.5s ease",
                    }}
                    className="group-hover:translate-x-2"
                  >
                    {item.degree}
                  </h3>
                  
                  <div className={`flex items-center gap-4 mb-1.5 ${item.align === 'right' ? 'md:justify-end flex-row-reverse' : 'md:justify-start'}`}>
                    {item.logo && (
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-gray-100 bg-white shadow-sm">
                        <img src={item.logo} alt={item.institution} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      </div>
                    )}
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "#000000",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.institution}
                    </p>
                  </div>
                  
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "rgba(0,0,0,0.6)",
                      maxWidth: "28rem",
                      marginLeft: item.align === 'right' ? 'auto' : '0',
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-40 mb-16 flex flex-col items-center text-center">
          <LineMask delay={0.1}>
            <h2
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 0.9,
                color: "#000000",
                letterSpacing: "-0.01em",
              }}
            >
              {language === 'fr' ? 'Licences & Certifications' : 'Licenses & Certifications'}
            </h2>
          </LineMask>
        </div>

        <div className="flex flex-col gap-12 items-center">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              className="w-full max-w-3xl flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-50"
            >
              {cert.logo && (
                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full overflow-hidden border border-gray-100 bg-white">
                  <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
              )}
              <div className="flex flex-col items-center md:items-start text-center md:text-left pt-1">
                <h3
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: "#000000",
                    marginBottom: "0.5rem",
                  }}
                >
                  {cert.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "#B79E7C",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {cert.issuer}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.5)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
