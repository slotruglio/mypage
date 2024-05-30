import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Link from 'next/link';
import { SocialHeader } from '../components/Social';

const polito_href = process.env.POLITO_HREF ?? 'https://www.polito.it';
const tas_href = process.env.TAS_HREF ?? 'https://www.thalesaleniaspace.com/';

export default async function IntroSection({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);

  function getCorrectSeparator(index: number, length: number) {
    if (index < length - 2) {
      return ', ';
    } else if (index === length - 2) {
      return ' & ';
    }
    return '.';
  }

  return (
    <div
      id="intro-section"
      className="flex h-screen flex-col items-center justify-between p-2 md:p-24"
    >
      <div className="flex w-full grow flex-col items-center justify-center space-y-12 p-8 lg:flex-row lg:justify-between lg:space-x-4 lg:space-y-0">
        <div className="personal justify-items-start space-y-4 text-center lg:text-start">
          <h1 className="text-3xl font-bold text-main-brown md:text-5xl">
            Samuele Lo Truglio
          </h1>
          <h3 className="text-m text-main-white md:text-xl">
            🌎 {dictionary.occupation}{' '}
            <Link
              href={tas_href}
              className="app-link"
              target="_blank"
              rel="noreferrer"
            >
              @Thales Alenia Space
            </Link>{' '}
          </h3>
          <h3 className="text-m text-main-white md:text-xl">
            🎓 {dictionary.degree}{' '}
            <Link
              href={polito_href}
              className="app-link"
              target="_blank"
              rel="noreferrer"
            >
              @Politecnico di Torino
            </Link>{' '}
          </h3>
        </div>
        <div className="social flex flex-col md:flex-row md:space-x-4 lg:flex-col lg:space-x-0">
          <SocialHeader social="linkedin" />
          <SocialHeader social="github" />
        </div>
      </div>
      <div className="min-h-1/3 grow">
        <h3 className="text-m text-center italic text-main-white md:text-xl">
          Audentes fortuna iuvat - {dictionary.quote}{' '}
        </h3>
      </div>
      <div className="flex flex-col text-center">
        <div>
          {dictionary.scrollMoreToSeeMy}{' '}
          {dictionary.sections.map(({ title, id }, index, array) => (
            <span key={index}>
              <Link href={`#${id}`} className="app-link">
                {title}
              </Link>
              {getCorrectSeparator(index, array.length)}
            </span>
          ))}
        </div>
        <i className="bi bi-chevron-double-down animate-pulse" />
      </div>
    </div>
  );
}
