import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { ParallaxProvider, ParallaxBannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import i18n from './i18n';
import { Suspense, useState } from 'react';



import './App.css';
import Loading from './Loading';


import logo from './logo.svg';
import matrix from './assets/img/background.png';

import LocaleContext from './LocaleContext';
import { LanguageButton, Title, Description, Bachelor, Master, ScrollText } from './Language';



const Header = () => {
	const text = {
		children:
			<>
				<Row xs={1} md={1} lg={2} className="center px-2 justify-content-center">
					<Col className='my-2 text-lg-end'><h1><b>Samuele Lo Truglio</b></h1></Col>
					<Col className=' text-lg-start'><Title /></Col>
					<Col fluid className='my-4  '><Description /></Col>
				</Row>
				<Row xs={1} className="end px-2"><Col className="text-lg-center">
					<ScrollText />
					</Col>
				</Row>
			</>

		,
		translateY: [0, 30],
		scale: [1, 0.70, "easeOutCubic"],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
	}

	const back01 = {
		image: matrix,
		translateY: [0, -30],
		opacity: [.3, .1],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
	}

	return (
		<ParallaxBanner
			layers={[back01, text]}
			className="App-header"
		/>
	);
};


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
							<Container className='flex'>
								<a
									className="bi bi-github App-link"
									href='https://github.com/slotruglio'
									target="_blank"
									rel="noreferrer"> slotruglio</a>
							</Container>
							<Container>
								<a
									className="bi bi-linkedin App-link"
									href='https://www.linkedin.com/in/samuele-lo-truglio/'
									target="_blank"
									rel="noreferrer"> Samuele Lo Truglio</a>
							</Container>
						</footer>
					</Suspense>
				</LocaleContext.Provider>
			</div>
		</ParallaxProvider>

	);
}


export default App;
