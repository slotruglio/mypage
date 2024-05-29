import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LanguageButton from "./components/LanguageButtons";
import GoUpButton from "./components/GoUpButton";
import IntroSection from "./pages/IntroSection";
import TextSection from "./pages/TextSection";
import Footer from "./components/Footer";


export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className="bg-binary-pattern bg-fixed min-h-screen font-mono text-main-white">
      <div id="header" className="header fixed top-0 right-0 z-40">
        <LanguageButton lang={lang} />
      </div>
      <IntroSection lang={lang} />
      <TextSection id="work-section" title={dictionary.work} descriptions={dictionary.workTexts} />
      <TextSection id="education-section" title={dictionary.school} descriptions={dictionary.schoolTexts} />
      <TextSection id="awards-section" title={dictionary.awards} descriptions={dictionary.awardsTexts} />
      <TextSection id="skills-section" title={dictionary.skills} descriptions={dictionary.skillsTexts} />
      <Footer lang={lang} dictionary={dictionary} />
    </main>
  );
}
