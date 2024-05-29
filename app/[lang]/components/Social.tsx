// import from node modules
import Link from 'next/link';

const linkedinUrl = process.env.LINKEDIN ?? "https://www.linkedin.com/in/samuele-lo-truglio/";
const githubUrl = process.env.GITHUB ?? "https://github.com/slotruglio";
const innovationDays = process.env.INNOVATIONDAYS ?? "https://www.economysicilia.it/innovation-days-palermo-vince-il-progetto-tlf-di-una-tuta-antinfortunistica-ultratecnologica/"

const socialTexts = {
    "linkedin": {
        "title": "LinkedIn",
        "iconClassName": "bi bi-linkedin",
        "href": linkedinUrl,
        "l-text": "Samuele Lo Truglio",
        "s-text": "S. Lo Truglio"
    },
    "github": {
        "title": "GitHub",
        "iconClassName": "bi bi-github",
        "href": githubUrl,
        "l-text": "slotruglio",
        "s-text": "slotruglio"
    }
};

function SocialFooter({social} : {social: keyof typeof socialTexts}) {

    const content = socialTexts[social];

    return (
        <div>
            <Link
                className={content["iconClassName"] + " app-link"}
                href={content["href"]}
                target="_blank"
                rel="noreferrer">{content["l-text"]} </Link>
        </div>
    )
}

function SocialHeader({social}: {social: keyof typeof socialTexts}) {
    const content = socialTexts[social];
    return (
        <div className='flex flex-row gap-x-2'>
            <i className={content["iconClassName"]} />
            <p>{content["title"]}:</p>
            <Link
                className="app-link" href={content["href"]}
                target="_blank"
                rel="noreferrer"> {content["l-text"]}</Link>
        </div>
    )
}


export { SocialFooter, SocialHeader, innovationDays };