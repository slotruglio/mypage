// import from node modules
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

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

function SocialFooter(props) {
    const [isShort, setShort] = useState(window.innerWidth < 415);

    const updateMedia = () => {
        setShort(window.innerWidth < 415);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const content = socialTexts[props.social];
    return (
        <Container>
            <a
                className={content["iconClassName"] + " App-link"}
                href={content["href"]}
                target="_blank"
                rel="noreferrer">{" "+ isShort ? content["s-text"] : content["l-text"]}</a>
        </Container>
    )
}

function SocialHeader(props) {
    const content = socialTexts[props.social];
    return (
        <Container>{content["title"]}:
            <a
                className="App-link" href={content["href"]}
                target="_blank"
                rel="noreferrer"> {content["l-text"]}</a>
        </Container>
    )
}


export { SocialFooter, SocialHeader, innovationDays };