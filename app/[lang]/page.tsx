import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LanguageButton from "./components/LanguageButtons";
import { SocialHeader } from "./components/Social";
import Link from "next/link";
import GoUpButton from "./components/GoUpButton";

const polito_href = "https://www.polito.it/";
const tas_href = "https://www.thalesaleniaspace.com/";

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
      <div id="intro-section" className="flex flex-col items-center justify-center h-screen p-24 space-y-8">
        <div className="flex flex-col w-full lg:flex-row p-8 items-center justify-center space-y-12 lg:space-y-0 lg:justify-between lg:space-x-4">
          <div className="personal space-y-4 justify-items-start text-center lg:text-start">
            <h1
              className="text-5xl text-main-brown font-bold">
              Samuele Lo Truglio
            </h1>
            <h3 className="text-xl text-main-white">
            🌎 {dictionary.occupation} <Link href={tas_href} className="app-link" target="_blank"
                rel="noreferrer">@Thales Alenia Space</Link> </h3>
            <h3 className="text-xl text-main-white">
            🎓 {dictionary.degree} <Link href={polito_href} className="app-link" target="_blank"
                rel="noreferrer">@Politecnico di Torino</Link> </h3>
          </div>
          <div className="social flex flex-col md:flex-row md:space-x-4 lg:flex-col lg:space-x-0">
            <SocialHeader social="linkedin" />
            <SocialHeader social="github" />
          </div>
        </div>
        <div>
          <h3 className="text-xl text-center text-main-white italic">
            Audentes fortuna iuvat - {dictionary.quote} </h3>
        </div>
        <div>
          
        </div>
      </div>
      <div id="work-section" className="flex items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-center text-white">
          Work
        </h1>   
      </div>
      <div id="school-section" className="flex items-center justify-center h-screen">
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
