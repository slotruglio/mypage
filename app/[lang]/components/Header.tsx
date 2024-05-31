'use client';


import { Locale } from "@/i18n-config";
import Link from "next/link";
import { useState } from "react";
import LanguageButton from "./LanguageButtons";

export default function Header({ lang, dictionary }: { lang: Locale, dictionary: any }) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = () => {
        setIsHover(true)
    };

    const handleMouseOut = () => {
        setIsHover(false)
    }

    return <div
        id="header"
        className='header fixed top-0 z-40 p-4 w-full transition-all ease-in-out flex flex-row justify-between align-top'
    >
        {isHover ? <div
            onMouseOver={() => handleMouseOver()}
            onMouseOut={() => handleMouseOut()}
            className={`rounded-lg bg-gray-900 px-6 py-3 align-middle font-sans text-xs text-white opacity-[0.85] shadow-md shadow-none shadow-gray-900/10 transition-all transition-all delay-150 duration-200 ease-in-out hover:shadow-lg hover:shadow-none hover:shadow-gray-900/20`}>
            <div className="flex flex-col space-y-4">
                {dictionary.sections.map((section: any, index: number) => (
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
        </div> :
            <div
                onMouseOver={() => handleMouseOver()}
                onMouseOut={() => handleMouseOut()}
                className=
                'rounded-lg bg-gray-900 bi bi-list px-6 py-3 text-center align-middle font-sans text-xs uppercase text-white shadow-md shadow-none shadow-gray-900/10 backdrop-blur-sm transition-all transition-opacity delay-150 duration-200 ease-in-out opacity-[0.85] hover:shadow-lg hover:shadow-none hover:shadow-gray-900/20'
            />
        }
        <LanguageButton lang={lang} />
    </div>
}