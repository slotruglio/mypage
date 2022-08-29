import { Container } from 'react-bootstrap';

const linkedinUrl = "https://www.linkedin.com/in/samuele-lo-truglio/";
const githubUrl = "https://github.com/slotruglio";
const innovationDays = "https://www.economysicilia.it/innovation-days-palermo-vince-il-progetto-tlf-di-una-tuta-antinfortunistica-ultratecnologica/"

function LinkedinFooter() {
    return (
        <Container>
            <a
                className="bi bi-linkedin App-link"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"> Samuele Lo Truglio</a>
        </Container>
    )
}

function SocialHeader(props) {
    
    return (
        <Container>{props.isLinkedin ? "LinkedIn" : "Github"}:
            <a
                className="App-link" href={props.isLinkedin ? linkedinUrl : githubUrl}
                target="_blank"
                rel="noreferrer"> {props.isLinkedin ? "Samuele Lo Truglio": "slotruglio"}</a>
        </Container>
    )
}

function GithubFooter() {
    return (
        <Container className='flex'>
            <a
                className="bi bi-github App-link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"> slotruglio</a>
        </Container>
    )
}


export { LinkedinFooter, GithubFooter, SocialHeader, innovationDays };