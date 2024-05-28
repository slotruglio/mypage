"use client"

import { Locale } from "@/i18n-config";
import Link from "next/link";
import { useState } from "react";

export default function GoUpButton({lang, text} : {lang: Locale, text: string}) {
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
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);
    }

    return <Link href={`/${lang}/#intro-section`} as={`/${lang}/#intro-section`} 
    className={"fixed bottom-0 right-0 align-middle select-none m-2 font-sans font-bold uppercase text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none transition-opacity ease-in-out delay-150 duration-200 "+ (isVisible ? "opacity-100" : "opacity-0 pointer-events-none")}
    >
        <span className="app-link">
    {text} ↑</span></Link>

}