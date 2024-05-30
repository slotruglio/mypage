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
  
  function getSectionWidget(section: any, index: number) {
    if (section.id === "skills-section") {
      return <SkillSection key={index} id={section.id} icon={section.icon} title={section.title} skillsTexts={section.texts} />;
    }
    return <TextSection key={index} id={section.id} title={section.title} subtitle={section.subtitle} icon={section.icon} descriptions={section.texts} />;
  }

  return (
    <main className="bg-binary-pattern bg-fixed min-h-screen font-mono text-main-white">
      <div id="header" className="header fixed top-0 right-0 z-40">
        <LanguageButton lang={lang} />
      </div>
      <IntroSection lang={lang} />
      {sections.map((section, index) => getSectionWidget(section, index))}
      <Footer lang={lang} dictionary={dictionary} />
    </main>
  );
}
