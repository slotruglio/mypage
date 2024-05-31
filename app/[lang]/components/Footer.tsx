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
        <GoUpButton lang={lang} text={dictionary.goUp} />
      </div>
    </div>
  );
}
