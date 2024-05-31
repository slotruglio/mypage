'use client';

import { Locale } from '@/i18n-config';
import { usePathname, useRouter } from 'next/navigation';

function LanguageButton({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const radios = [
    { name: 'EN', value: 'en' },
    { name: 'IT', value: 'it' },
  ];

  function getClassName(index: number) {
    let base =
      'align-middle select-none font-sans font-bold text-center uppercase transition-all opacity-50 shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg backdrop-blur-sm bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] hover:opacity-[0.85] focus:shadow-none disabled:opacity-[0.85]';
    if (index === 0) {
      return base + ' rounded-r-none border-r-0';
    } else if (index === radios.length - 1) {
      return base + ' rounded-l-none';
    } else {
      return base + ' rounded-r-none border-r-0 rounded-l-none';
    }
  }

  return (
    <div className="row divide-x divide-gray-800">
      {radios.map(({ name, value }, index) => (
        <button
          key={index}
          disabled={value === lang}
          type="button"
          className={getClassName(index)}
          onClick={() =>
            replace(pathname.replace(`/${lang}`, `/${value}`), {
              scroll: false,
            })
          }
        >
          {name}{' '}
        </button>
      ))}
    </div>
  );
}

export default LanguageButton;
