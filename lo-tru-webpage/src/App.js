// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// import from libraries
import { ParallaxProvider} from 'react-scroll-parallax';
import { Suspense, useState } from 'react';

// import from local libraries
import i18n from './i18n';
import Loading from './components/Loading';
import LocaleContext from './LocaleContext';
import { LanguageButton, Bachelor, Master } from './components/Language';
import { LinkedinFooter, GithubFooter} from './components/Social';
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

						<Bachelor />
						<Master />

						<footer className='App-footer fixed-bottom'>
							<GithubFooter />
							<LinkedinFooter />
						</footer>
					</Suspense>
				</LocaleContext.Provider>
			</div>
		</ParallaxProvider>

	);
}


export default App;
