import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LanguageButton from "./components/LanguageButtons";
import GoUpButton from "./components/GoUpButton";
import IntroSection from "./pages/IntroSection";


export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className="bg-binary-pattern bg-fixed min-h-screen font-mono text-main-white">
      <div id="header" className="header fixed top-0 right-0">
        <LanguageButton lang={lang} />
      </div>
      <IntroSection lang={lang} />
      <div id="work-section" className="flex items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-center text-white">
          Work
        </h1>   
      </div>
      <div id="education-section" className="flex items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-center text-white">
          School
        </h1>   
      </div>
      <div id="awards-section" className="flex items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-center text-white">
          Awards
        </h1>   
      </div>
      <div id="skills-section" className="flex items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-center text-white">
          Skills
        </h1>   
      </div>
      <GoUpButton lang={lang} text={dictionary.goUp} />
    </main>
  );
}
