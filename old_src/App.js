// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/App.css';
import './css/palette.css';

// import from node modules
import { ParallaxProvider } from 'react-scroll-parallax';
import { Suspense, useState } from 'react';
import { Container } from 'react-bootstrap';

// import from custom libraries
import i18n from './utility/i18n';
import Loading from './components/Loading';
import LocaleContext from './utility/LocaleContext';
import { LanguageButton, TextBox } from './components/Language';
import { innovationDays, SocialFooter } from './components/Social';
import Header from './components/Header';




function App() {
	const [locale, setLocale] = useState(i18n.language);
	i18n.on('languageChanged', (lng) => setLocale(i18n.language));

	return (
		<ParallaxProvider>
			<div className="App">
				<LocaleContext.Provider value={{ locale, setLocale }}>
					<LanguageButton />
					<Suspense fallback={<Loading />}>
						<Header />
						<Container>
							<h3>Resume</h3>
							<TextBox text='resume' />
						</Container>
						
						<Container>
							<h3>Studies</h3>
							<TextBox text='bachelor' />
							<TextBox text='master' />
						</Container>
						<Container>
							<h3>Soft Skills</h3>
							<TextBox text='soft-skills' />
						</Container>
						<Container>
							<h3>Programming Skills</h3>
							<TextBox text='programming-skills' />
						</Container>
						<Container>
							<h3>Experiences</h3>
							<TextBox text='innovation-day' link={innovationDays} />
						</Container>
						
						<footer className='App-footer fixed-bottom'>
							<SocialFooter social="github" />
							<SocialFooter social="linkedin" />
						</footer>
						<a className="App-link credits" href="https://www.flaticon.com/free-icons/ai" title="ai icons">Ai icons created by Smartline - Flaticon</a>
					</Suspense>
				</LocaleContext.Provider>
			</div>
		</ParallaxProvider>

	);
}


export default App;
