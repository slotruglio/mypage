import { Locale } from "@/i18n-config";
import GoUpButton from "./GoUpButton";
import Link from "next/link";

const sections = process.env.SECTIONS?.split(',') ?? [
    "intro",
    "work",
    "school",
    "awards",
    "skills",
]

export default function Footer({ lang, dictionary }: { lang: Locale, dictionary: any }) {

    return <div id="footer" className="footer fixed bottom-0 right-0 z-40">
        <div className="grid w-full place-items-end overflow-x-scroll rounded-lg p-6 lg:overflow-visible gap-y-4">
            <div className="opacity-0 hover:opacity-50 \
            align-middle py-3 px-6 \
            font-sans transition-all \
            shadow-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white \
            shadow-md shadow-gray-900/10 hover:shadow-lg \
            hover:shadow-gray-900/20 hover:opacity-[0.85] hover:shadow-none \
            hover:shadow-none \
            transition-opacity ease-in-out delay-150 duration-200">
                <div className="flex flex-col space-y-4">
                    {sections.map((section, index) => (
                        <Link key={index} className="opacity-50 hover:opacity-100" href={"#"+section+"-section"}>{dictionary[section]}</Link>
                    ))}
                </div>
            </div>
            <GoUpButton lang={lang} text={dictionary.goUp} />
        </div>
    </div>
}