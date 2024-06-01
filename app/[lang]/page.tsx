import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import LanguageButton from './components/LanguageButtons';
import IntroSection from './pages/IntroSection';
import TextSection from './pages/TextSection';
import Footer from './components/Footer';
import SkillSection from './pages/SkillsSection';
import Header from './components/Header';
import Disclaimer from './components/Disclaimer';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const sections = dictionary.sections;

  function getSectionWidget(section: any, index: number) {
    if (section.id === 'skills-section') {
      return (
        <SkillSection
          key={index}
          id={section.id}
          icon={section.icon}
          title={section.title}
          skillsTexts={section.texts}
        />
      );
    } else if (section.id === 'intro-section') {
      return <IntroSection key={index} dictionary={dictionary} />;
    }
    return (
      <TextSection
        key={index}
        id={section.id}
        title={section.title}
        subtitle={section.subtitle}
        icon={section.icon}
        descriptions={section.texts}
      />
    );
  }

  return (
    <main className="min-h-screen bg-binary-pattern bg-fixed font-mono text-main-white">
      <Header lang={lang} dictionary={dictionary} />
      {sections.map((section, index) => getSectionWidget(section, index))}
      <Footer lang={lang} dictionary={dictionary} />
      <Disclaimer lang={lang} dictionary={dictionary} />
    </main>
  );
}
