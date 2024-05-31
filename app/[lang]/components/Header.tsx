'use client';

import { Locale } from '@/i18n-config';
import Link from 'next/link';
import { useState } from 'react';
import LanguageButton from './LanguageButtons';

export default function Header({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: any;
}) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <div
      id="header"
      className="header fixed top-0 z-40 flex w-full flex-row justify-between p-4 align-top"
    >
      <div
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
        className={`section-menu rounded-lg bg-gray-900 px-6 py-3 align-middle font-sans text-xs text-white opacity-[0.85] shadow-md shadow-none shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 ${!isHover && 'bi bi-list text-center'}`}
      >
        {isHover && (
          <div className="flex flex-col space-y-4">
            {dictionary.sections.map((section: any, index: number) => (
              <Link
                key={index}
                className="flex flex-row gap-x-2 opacity-50 hover:opacity-100"
                href={`#${section.id}`}
              >
                <i className={section.icon} />
                <span>{section.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <LanguageButton lang={lang} />
    </div>
  );
}
