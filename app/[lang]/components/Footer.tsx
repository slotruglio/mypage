import { Locale } from '@/i18n-config';
import GoUpButton from './GoUpButton';
import Link from 'next/link';

export default function Footer({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: any;
}) {
  const sections = dictionary.sections;
  return (
    <div id="footer" className="footer fixed bottom-0 right-0 z-40">
      <div className="grid w-full place-items-end gap-y-4 overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <div className="\ rounded-lg bg-gray-900 px-6 py-3 align-middle font-sans text-xs text-white opacity-0 shadow-md shadow-none shadow-gray-900/10 transition-all transition-opacity delay-150 duration-200 ease-in-out hover:opacity-50 hover:opacity-[0.85] hover:shadow-lg hover:shadow-none hover:shadow-gray-900/20">
          <div className="flex flex-col space-y-4">
            {sections.map((section: any, index: number) => (
              <Link
                key={index}
                className="flex flex-row gap-x-2 opacity-50 hover:opacity-100"
                href={'#' + section.id}
              >
                <i className={section.icon} />
                <span>{section.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <GoUpButton lang={lang} text={dictionary.goUp} />
      </div>
    </div>
  );
}
