import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import { SocialHeader } from "../components/Social";

const polito_href = process.env.POLITO_HREF ?? "https://www.polito.it"
const tas_href = process.env.TAS_HREF ?? "https://www.thalesaleniaspace.com/"

export default async function IntroSection({ lang }: { lang: Locale }) {
    const dictionary = await getDictionary(lang);

    return <div id="intro-section" className="flex flex-col items-center justify-between h-screen p-2 md:p-24">
        <div className="flex grow flex-col w-full lg:flex-row p-8 items-center justify-center space-y-12 lg:space-y-0 lg:justify-between lg:space-x-4">
            <div className="personal space-y-4 justify-items-start text-center lg:text-start">
                <h1
                    className="text-3xl md:text-5xl text-main-brown font-bold">
                    Samuele Lo Truglio
                </h1>
                <h3 className="text-m md:text-xl text-main-white">
                    🌎 {dictionary.occupation} <Link href={tas_href} className="app-link" target="_blank"
                        rel="noreferrer">@Thales Alenia Space</Link> </h3>
                <h3 className="text-m md:text-xl text-main-white">
                    🎓 {dictionary.degree} <Link href={polito_href} className="app-link" target="_blank"
                        rel="noreferrer">@Politecnico di Torino</Link> </h3>
            </div>
            <div className="social flex flex-col md:flex-row md:space-x-4 lg:flex-col lg:space-x-0">
                <SocialHeader social="linkedin" />
                <SocialHeader social="github" />
            </div>
        </div>
        <div className="grow min-h-1/3 ">
            <h3 className="text-m md:text-xl text-center text-main-white italic">
                Audentes fortuna iuvat - {dictionary.quote} </h3>
        </div>
        <div className="flex flex-col text-center">
            <div>
                {dictionary.scrollMoreToSeeMy} <Link href={"#work-section"} className="app-link">{dictionary.work}</Link>, <Link href={"#education-section"} className="app-link">{dictionary.school}</Link>, <Link href={"#awards-section"} className="app-link">{dictionary.awards}</Link> and <Link href={"#skills-section"} className="app-link">{dictionary.skills}</Link>
            </div>
                <i className="bi bi-chevron-double-down animate-pulse"  />

        </div>
    </div>
}