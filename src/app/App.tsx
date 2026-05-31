import { ScrollProgress } from "./components/ScrollProgress";
import { CustomCursor } from "./components/CustomCursor";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { MyWorldSection } from "./components/MyWorldSection";
import { ExperiencesSection } from "./components/ExperiencesSection";
import { EducationSection } from "./components/EducationSection";
import { CreativeProcessSection } from "./components/CreativeProcessSection";
import { JournalSection } from "./components/JournalSection";
import { BeyondSection } from "./components/BeyondSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { NichePerfumesSection } from "./components/NichePerfumesSection";

import { LanguageProvider } from "./LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div style={{ background: "#FFFFFF", color: "#000000", cursor: "none" }}>
        <ScrollProgress />
        <CustomCursor />
        <Navigation />
        <HeroSection />
        <PhilosophySection />
        <MyWorldSection />
        <ExperiencesSection />
        <EducationSection />
        <CreativeProcessSection />
        <JournalSection />
        <BeyondSection />
        <NichePerfumesSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
}
