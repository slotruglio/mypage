'use client';

import { Locale } from '@/i18n-config';
import Link from 'next/link';
import { useState } from 'react';

export default function GoUpButton({
  lang,
  text,
}: {
  lang: Locale;
  text: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Listen to the scroll event
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <Link
      href={`/${lang}/#intro-section`}
      as={`/${lang}/#intro-section`}
      className={
        'rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-none shadow-gray-900/10 backdrop-blur-sm transition-all transition-opacity delay-150 duration-200 ease-in-out hover:opacity-[0.85] hover:shadow-lg hover:shadow-none hover:shadow-gray-900/20' +
        (isVisible ? 'opacity-50' : 'pointer-events-none opacity-0')
      }
    >
      <span className="app-link">{text} ↑</span>
    </Link>
  );
}
