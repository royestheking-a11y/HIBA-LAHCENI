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

const articlesEn = [
  {
    img: "/images/journal_luxury_1780248346877.png",
    category: "Luxury Marketing",
    title: "Luxury Marketing in the Digital Age",
    date: "May 2026",
    excerpt:
      "How heritage brands are navigating the tension between exclusivity and digital accessibility—and what it means for the future of luxury.",
  },
  {
    img: "/images/journal_beauty_1780248362402.png",
    category: "Beauty Industry",
    title: "Why Storytelling is the Heart of Beauty Brands",
    date: "April 2026",
    excerpt:
      "The most successful beauty campaigns don't sell products—they sell identity, belonging, and transformation.",
  },
  {
    img: "/images/journal_psychology_1780248378239.png",
    category: "Consumer Psychology",
    title: "The Psychology of Premium: Why We Choose Luxury",
    date: "March 2026",
    excerpt:
      "Understanding the cognitive and emotional drivers behind luxury purchasing reveals opportunities for connection.",
  },
];

const articlesFr = [
  {
    img: "/images/journal_luxury_1780248346877.png",
    category: "Marketing de Luxe",
    title: "Le Marketing de Luxe à l'Ère Numérique",
    date: "Mai 2026",
    excerpt:
      "Comment les marques patrimoniales naviguent entre exclusivité et accessibilité numérique—et ce que cela signifie pour l'avenir du luxe.",
  },
  {
    img: "/images/journal_beauty_1780248362402.png",
    category: "Industrie de la Beauté",
    title: "Pourquoi le Storytelling est au Cœur des Marques de Beauté",
    date: "Avril 2026",
    excerpt:
      "Les campagnes de beauté les plus réussies ne vendent pas de produits—elles vendent une identité, une appartenance et une transformation.",
  },
  {
    img: "/images/journal_psychology_1780248378239.png",
    category: "Psychologie du Consommateur",
    title: "La Psychologie du Premium : Pourquoi Nous Choisissons le Luxe",
    date: "Mars 2026",
    excerpt:
      "Comprendre les moteurs cognitifs et émotionnels derrière l'achat de luxe révèle des opportunités de connexion.",
  },
];

export function JournalSection() {
  const { language } = useLanguage();
  const articles = language === 'fr' ? articlesFr : articlesEn;
  const featured = articles[0];
  const sideArticles = articles.slice(1);

  return (
    <section id="journal" style={{ background: "#FFFFFF", padding: "12rem 2.5rem" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 border-b border-[#000000]/10 pb-12">
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
              {language === 'fr' ? 'Chapitre 04' : 'Chapter 04'}
            </motion.p>
            <LineMask delay={0.1}>
              <h2
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                  fontWeight: 400,
                  lineHeight: 0.88,
                  color: "#000000",
                  letterSpacing: "-0.02em",
                }}
              >
                Journal &amp;
              </h2>
            </LineMask>
            <LineMask delay={0.2}>
              <h2
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                  fontWeight: 400,
                  lineHeight: 0.88,
                  color: "#000000",
                  letterSpacing: "-0.02em",
                  fontStyle: "italic",
                }}
              >
                {language === 'fr' ? 'Perspectives' : 'Insights'}
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
              maxWidth: "20rem",
            }}
            className="md:text-right"
          >
            {language === 'fr' ? "Perspectives sur le luxe, la beauté et l'évolution de la communication de marque." : "Perspectives on luxury, beauty, and the evolving landscape of brand communication."}
          </motion.p>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Featured Article (Left) */}
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="overflow-hidden mb-8 relative" style={{ aspectRatio: "4/5" }}>
              <ImageWithFallback
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[#B79E7C]/0 group-hover:bg-[#B79E7C]/10 transition-colors duration-700" />
            </div>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.32em", color: "#B79E7C", textTransform: "uppercase", marginBottom: "1rem" }}>
              {featured.category} &nbsp;·&nbsp; {featured.date}
            </p>

            <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.1, color: "#000000", marginBottom: "1.5rem" }} className="group-hover:text-[#B79E7C] transition-colors duration-500">
              {featured.title}
            </h3>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(0,0,0,0.6)", maxWidth: "90%", marginBottom: "2rem" }}>
              {featured.excerpt}
            </p>

            <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
              <div className="w-12 h-[1px] bg-[#000000] group-hover:bg-[#B79E7C] transition-colors duration-500" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", color: "#000000", textTransform: "uppercase" }} className="group-hover:text-[#B79E7C] transition-colors duration-500">
                {language === 'fr' ? "Lire l'Article" : 'Read Article'}
              </span>
            </div>
          </motion.article>

          {/* Secondary Articles (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:gap-0 lg:justify-between lg:pb-12">
            {sideArticles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.3 + (i * 0.15), ease: EASE }}
                className="group cursor-pointer flex flex-col sm:flex-row lg:flex-col gap-6 lg:gap-6"
              >
                {/* Square Image for side articles */}
                <div className="overflow-hidden relative w-full sm:w-1/2 lg:w-full shrink-0" style={{ aspectRatio: "16/10" }}>
                  <ImageWithFallback
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-[#B79E7C]/10 transition-colors duration-700" />
                </div>

                <div className="flex flex-col justify-center">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.3em", color: "#B79E7C", textTransform: "uppercase", marginBottom: "0.8rem" }}>
                    {article.category}
                  </p>
                  <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: "clamp(1.4rem, 2vw, 1.8rem)", fontWeight: 400, lineHeight: 1.15, color: "#000000", marginBottom: "1rem" }} className="group-hover:text-[#B79E7C] transition-colors duration-500">
                    {article.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(0,0,0,0.6)", marginBottom: "1.5rem" }}>
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 group-hover:gap-5 transition-all duration-500 mt-auto">
                    <div className="w-8 h-[1px] bg-[#000000] group-hover:bg-[#B79E7C] transition-colors duration-500" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.2em", color: "#000000", textTransform: "uppercase" }} className="group-hover:text-[#B79E7C] transition-colors duration-500">
                      {language === 'fr' ? 'Lire' : 'Read'}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
