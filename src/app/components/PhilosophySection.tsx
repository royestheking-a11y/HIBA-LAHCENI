import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

const EASE = [0.22, 1, 0.36, 1] as const;

function LineMask({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div style={{ overflow: "hidden", padding: "0.1em 0" }}>
      <motion.div
        initial={{ y: "105%", skewY: 1 }}
        whileInView={{ y: "0%", skewY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function PhilosophySection() {
  const { language } = useLanguage();

  const tagsEn = ["Trilingual", "Master's in Strategic Marketing", "EBS Paris Exchange", "Rabat Business School"];
  const tagsFr = ["Trilingue", "Master en Marketing Stratégique", "Échange EBS Paris", "Rabat Business School"];
  const tags = language === 'fr' ? tagsFr : tagsEn;

  return (
    <section
      id="about"
      className="overflow-hidden flex items-center justify-center"
      style={{ background: "#000000", padding: "11rem 2.5rem", position: "relative" }}
    >
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          zIndex: 1,
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative" style={{ zIndex: 2 }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.55rem",
            fontWeight: 400,
            letterSpacing: "0.42em",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
            marginBottom: "4.5rem",
          }}
        >
          {language === 'fr' ? 'Une Philosophie' : 'A Philosophy'}
        </motion.p>

        {/* Quote - line by line reveal */}
        <div style={{ marginBottom: "4rem" }}>
          <LineMask delay={0.15}>
            <p
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.25,
                color: "#FFFFFF",
                letterSpacing: "0.01em",
              }}
            >
              {language === 'fr' ? '"Je crois que les grandes' : '"I believe great brands'}
            </p>
          </LineMask>
          <LineMask delay={0.28}>
            <p
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.25,
                color: "#FFFFFF",
                letterSpacing: "0.01em",
              }}
            >
              {language === 'fr' ? 'marques ne se voient pas' : 'are not only seen—'}
            </p>
          </LineMask>
          <LineMask delay={0.42}>
            <p
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.25,
                color: "#B79E7C",
                letterSpacing: "0.01em",
              }}
            >
              {language === 'fr' ? 'seulement—elles se ressentent."' : 'they are felt."'}
            </p>
          </LineMask>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          style={{
            width: "3rem",
            height: "1px",
            background: "rgba(183,158,124,0.4)",
            margin: "0 auto 3.5rem",
            transformOrigin: "center",
          }}
        />

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 400,
            lineHeight: 2.1,
            color: "rgba(255,255,255,0.6)",
            maxWidth: "33rem",
            margin: "0 auto 4rem",
          }}
        >
          {language === 'fr' ? (
            <>
              Je suis passionnée par la création d'expériences de marque élégantes qui se connectent émotionnellement avec le public.
              Mon travail unit réflexion stratégique, communication digitale et storytelling esthétique—
              dans les industries du luxe, de la beauté et du lifestyle premium.
            </>
          ) : (
            <>
              I am passionate about building elegant brand experiences that connect emotionally with audiences.
              My work unites strategic thinking, digital communication, and aesthetic storytelling—
              within luxury, beauty, and premium lifestyle industries.
            </>
          )}
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center flex-wrap gap-8"
        >
          {tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.55rem",
                fontWeight: 400,
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase",
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
