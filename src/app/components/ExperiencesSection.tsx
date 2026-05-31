import { useState } from "react";
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

const experiencesEn = [
  {
    number: "01",
    company: "Beauty Success",
    role: "Marketing & Brand Intern",
    period: "2025 — Present",
    tags: ["Social Media Management", "Community Engagement", "Performance Reporting", "Beauty Retail"],
    description:
      "Leading the digital presence across Instagram, TikTok, and Facebook—building community, driving engagement, and shaping the brand's digital voice within the beauty retail sector.",
    logo: "/beautysuccess_france_logo.jpeg",
  },
  {
    number: "02",
    company: "PRIGMA Agency",
    role: "Marketing & Brand Intern",
    period: "2024",
    tags: ["Brand Strategy", "Market Research", "Content Development", "Newsletter Campaigns"],
    description:
      "Conducted competitor benchmarking, website audits, and developed comprehensive content strategies and editorial newsletter campaigns for luxury and lifestyle clients.",
    logo: "/Prigma Agency.jpeg",
  },
  {
    number: "03",
    company: "AKDITAL",
    role: "Marketing & Communication Intern",
    period: "2023",
    tags: ["Brand Communication", "Customer Experience", "Internal Relations"],
    description:
      "Developed patient relationship initiatives and managed internal communications to elevate the brand's presence and deepen the customer experience.",
    logo: "/akdital_logo.jpeg",
  },
  {
    number: "04",
    company: "REDAL",
    role: "Customer Experience Intern",
    period: "2022",
    tags: ["Digital Transformation", "Customer Education", "Service Adoption"],
    description:
      "Promoted digital adoption and educated customers on new service channels, contributing meaningfully to a smoother digital transformation journey.",
    logo: "/Redal logo.jpeg",
  },
];

const experiencesFr = [
  {
    number: "01",
    company: "Beauty Success",
    role: "Stagiaire Marketing & Marque",
    period: "2025 — Présent",
    tags: ["Gestion Réseaux Sociaux", "Engagement Communautaire", "Rapport de Performance", "Retail Beauté"],
    description:
      "Gestion de la présence digitale sur Instagram, TikTok et Facebook—création de communauté, stimulation de l'engagement et développement de la voix digitale de la marque dans le secteur du retail beauté.",
    logo: "/beautysuccess_france_logo.jpeg",
  },
  {
    number: "02",
    company: "PRIGMA Agency",
    role: "Stagiaire Marketing & Marque",
    period: "2024",
    tags: ["Stratégie de Marque", "Étude de Marché", "Création de Contenu", "Campagnes Newsletter"],
    description:
      "Réalisation d'analyses comparatives, d'audits de sites web, et développement de stratégies de contenu complètes et de campagnes de newsletters éditoriales pour des clients du luxe et du lifestyle.",
    logo: "/Prigma Agency.jpeg",
  },
  {
    number: "03",
    company: "AKDITAL",
    role: "Stagiaire Marketing & Communication",
    period: "2023",
    tags: ["Communication de Marque", "Expérience Client", "Relations Internes"],
    description:
      "Développement d'initiatives de relations patients et gestion de la communication interne pour accroître la présence de la marque et approfondir l'expérience client.",
    logo: "/akdital_logo.jpeg",
  },
  {
    number: "04",
    company: "REDAL",
    role: "Stagiaire Expérience Client",
    period: "2022",
    tags: ["Transformation Digitale", "Éducation Client", "Adoption de Service"],
    description:
      "Promotion de l'adoption du numérique et éducation des clients sur les nouveaux canaux de service, contribuant significativement à une transition fluide vers la transformation digitale.",
    logo: "/Redal logo.jpeg",
  },
];

const volunteeringEn = [
  {
    number: "01",
    company: "HADAF",
    role: "Bénévole (Children)",
    period: "Jan 2023 - Feb 2023",
    tags: ["Social Impact", "Child Care", "Community Support"],
    description:
      "Association des parents et amis des personnes en situation de handicap mental. Dedicated support for children with mental disabilities in daily activities and social integration.",
    logo: "/hadaf_association_des_parents_et_amis_des_personnes_en_situation_de_handicap_mentales_logo.jpeg",
  }
];

const volunteeringFr = [
  {
    number: "01",
    company: "HADAF",
    role: "Bénévole (Enfants)",
    period: "Jan 2023 - Fév 2023",
    tags: ["Impact Social", "Garde d'Enfants", "Soutien Communautaire"],
    description:
      "Association des parents et amis des personnes en situation de handicap mental. Accompagnement dédié aux enfants souffrant de handicaps mentaux dans les activités quotidiennes et l'intégration sociale.",
    logo: "/hadaf_association_des_parents_et_amis_des_personnes_en_situation_de_handicap_mentales_logo.jpeg",
  }
];

export function ExperiencesSection() {
  const { language } = useLanguage();
  const experiences = language === 'fr' ? experiencesFr : experiencesEn;
  const volunteering = language === 'fr' ? volunteeringFr : volunteeringEn;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience" style={{ background: "#FFFFFF", padding: "10rem 2.5rem" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
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
              marginBottom: "1rem",
            }}
          >
            {language === 'fr' ? 'Chapitre 02' : 'Chapter 02'}
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
              {language === 'fr' ? 'Expériences' : 'Selected'}
            </h2>
          </LineMask>
          <LineMask delay={0.22}>
            <h2
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                fontWeight: 400,
                lineHeight: 0.88,
                color: "#000000",
                letterSpacing: "-0.01em",
                fontStyle: "italic",
              }}
            >
              {language === 'fr' ? 'Sélectionnées' : 'Experiences'}
            </h2>
          </LineMask>
        </div>

        {/* Experience rows */}
        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: EASE }}
            >
              <div
                style={{
                  borderTop: "1px solid rgba(183,158,124,0.2)",
                  cursor: "default",
                  transition: "background 0.5s ease",
                }}
                className={`py-10 md:py-12 px-6 group transition-all duration-500 rounded-lg ${activeIndex === i ? "bg-[#FAFAFA]" : ""}`}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  {/* Number + Year */}
                  <div className="md:col-span-2 flex md:flex-col gap-4 md:gap-2">
                    <p
                      style={{
                        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "rgba(183,158,124,0.5)",
                        transition: "color 0.4s ease",
                      }}
                      className={activeIndex === i ? "!text-[#B79E7C]" : ""}
                    >
                      {exp.number}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.6)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {exp.period}
                    </p>
                  </div>

                  {/* Company */}
                  <div className="md:col-span-4 flex items-start gap-4">
                    {exp.logo && (
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-100 bg-white shadow-sm mt-1">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      </div>
                    )}
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                          fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                          fontWeight: 400,
                          lineHeight: 1.1,
                          color: "#000000",
                          transition: "color 0.4s ease",
                          marginBottom: "0.5rem",
                        }}
                        className={activeIndex === i ? "!text-[#B79E7C]" : ""}
                      >
                        {exp.company}
                      </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.62rem",
                        fontWeight: 400,
                        letterSpacing: "0.15em",
                        color: "rgba(0,0,0,0.6)",
                        textTransform: "uppercase",
                      }}
                    >
                      {exp.role}
                    </p>
                  </div>
                </div>

                  {/* Description */}
                  <div className="md:col-span-6">
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        lineHeight: 1.95,
                        color: "rgba(0,0,0,0.6)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.52rem",
                            fontWeight: 400,
                            letterSpacing: "0.18em",
                            color: "rgba(0,0,0,0.6)",
                            textTransform: "uppercase",
                            border: "1px solid rgba(183,158,124,0.25)",
                            padding: "0.38rem 0.9rem",
                            transition: "all 0.4s ease",
                          }}
                          className={activeIndex === i ? "!border-[#B79E7C] !text-[#B79E7C]" : ""}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(183,158,124,0.2)", marginBottom: "4rem" }} />
        </div>

        {/* Volunteering Header */}
        <div className="mb-12 mt-16">
          <LineMask delay={0.1}>
            <h2
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 0.88,
                color: "#000000",
                letterSpacing: "-0.01em",
              }}
            >
              {language === 'fr' ? 'Bénévolat' : 'Volunteering'}
            </h2>
          </LineMask>
        </div>

        {/* Volunteering rows */}
        <div>
          {volunteering.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: EASE }}
            >
              <div
                style={{
                  borderTop: "1px solid rgba(183,158,124,0.2)",
                  cursor: "default",
                  transition: "background 0.5s ease",
                }}
                className={`py-8 md:py-10 px-6 group transition-all duration-500 rounded-lg hover:bg-[#FAFAFA]`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  {/* Number + Year */}
                  <div className="md:col-span-2 flex md:flex-col gap-4 md:gap-2">
                    <p
                      style={{
                        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "rgba(183,158,124,0.5)",
                      }}
                    >
                      {exp.number}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.6)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {exp.period}
                    </p>
                  </div>

                  {/* Company */}
                  <div className="md:col-span-4 flex items-start gap-4">
                    {exp.logo && (
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-100 bg-white shadow-sm mt-1">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      </div>
                    )}
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                          fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                          fontWeight: 400,
                          lineHeight: 1.1,
                          color: "#000000",
                          transition: "color 0.4s ease",
                          marginBottom: "0.5rem",
                        }}
                        className="group-hover:text-[#B79E7C]"
                      >
                        {exp.company}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.62rem",
                          fontWeight: 400,
                          letterSpacing: "0.15em",
                          color: "rgba(0,0,0,0.6)",
                          textTransform: "uppercase",
                        }}
                      >
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-6">
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        lineHeight: 1.95,
                        color: "rgba(0,0,0,0.6)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                         <span
                         key={tag}
                         style={{
                           fontFamily: "'Inter', sans-serif",
                           fontSize: "0.52rem",
                           fontWeight: 400,
                           letterSpacing: "0.18em",
                           color: "rgba(0,0,0,0.6)",
                           textTransform: "uppercase",
                           border: "1px solid rgba(183,158,124,0.25)",
                           padding: "0.38rem 0.9rem",
                           transition: "all 0.4s ease",
                         }}
                         className="group-hover:border-[#B79E7C] group-hover:text-[#B79E7C]"
                       >
                         {tag}
                       </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(183,158,124,0.2)" }} />
        </div>
      </div>
    </section>
  );
}
