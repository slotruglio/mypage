import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LanguageButton from "./components/LanguageButtons";
import IntroSection from "./pages/IntroSection";
import TextSection from "./pages/TextSection";
import Footer from "./components/Footer";
import SkillSection from "./pages/SkillsSection";


export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const sections = dictionary.sections;

  return (
    <main className="bg-binary-pattern bg-fixed min-h-screen font-mono text-main-white">
      <div id="header" className="header fixed top-0 right-0 z-40">
        <LanguageButton lang={lang} />
      </div>
      <IntroSection lang={lang} />
      {sections.map((section, index) => (
        <TextSection key={index} id={section.id} title={section.title} icon={section.icon} descriptions={section.texts} />
      ))}
      <SkillSection id="skills-section" icon="bi bi-ciao" title={dictionary.skills} skillsTexts={dictionary.skillsTexts} />
      <Footer lang={lang} dictionary={dictionary} />
    </main>
  );
}
