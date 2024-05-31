import { Locale } from '@/i18n-config';
import Link from 'next/link';

export default function Disclaimer({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: any;
}) {
  return (
    <div className="text-sm italic">
      <span>{dictionary.disclaimer}</span>{' '}
      <Link
        href={dictionary.SpeedInsightsPolicy.url}
        target="_blank"
        rel="noreferrer"
        className="app-link"
      >
        {dictionary.SpeedInsightsPolicy.text}{' '}
      </Link>
      <Link
        href={dictionary.WebAnalyticsPolicy.url}
        target="_blank"
        rel="noreferrer"
        className="app-link"
      >
        {dictionary.WebAnalyticsPolicy.text}{' '}
      </Link>
    </div>
  );
}
