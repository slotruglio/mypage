// import from node modules
import Link from 'next/link';

const linkedinUrl = "https://www.linkedin.com/in/samuele-lo-truglio/";
const githubUrl = "https://github.com/slotruglio";
const innovationDays = "https://www.economysicilia.it/innovation-days-palermo-vince-il-progetto-tlf-di-una-tuta-antinfortunistica-ultratecnologica/"

const socialTexts = {
    "linkedin": {
        "title": "LinkedIn",
        "iconClassName": "bi bi-linkedin",
        "href": linkedinUrl,
        "l-text": "Samuele Lo Truglio",
        "s-text": "S. Lo Truglio"
    },
    "github": {
        "title": "Github",
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
        <div>{content["title"]}:
            <Link
                className="app-link" href={content["href"]}
                target="_blank"
                rel="noreferrer"> {content["l-text"]}</Link>
        </div>
    )
}


export { SocialFooter, SocialHeader, innovationDays };