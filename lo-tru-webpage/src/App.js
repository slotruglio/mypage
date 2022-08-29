import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './logo.svg';
import './App.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { ParallaxProvider, ParallaxBannerLayer, ParallaxBanner } from 'react-scroll-parallax';

import image1 from './assets/img/bg-1.png';
import image2 from './assets/img/bg-2.png';
import image3 from './assets/img/bg-3.png';


const Header = () => {
	const text = {
		children:
			<Row xs={1} md={1} lg={2} className="center px-2 justify-content-center">
				<Col className='my-2'><h1><b>Samuele Lo Truglio</b></h1></Col>
				<Col ><h3>
					Computer Science Engineer
				</h3></Col>
				<Col fluid className='my-4 '><p>
					I'm <b>23 years old</b> and I live in <b>Torino</b>.
				</p></Col>
			</Row>

		,
		translateY: [0, 30],
		scale: [1, 0.70, "easeOutCubic"],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
	}

	const bg1 = {
		image: image1,
		translateY: [0, 50],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
	}

	const bg2 = {
		image: image2,
		translateY: [5, 40],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
	  }

	  const bg3 = {
		image: image3,
		translateY: [20, 20],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
	  }
	return (
		<ParallaxBanner
			layers={[text]}
			className="App-header"
		/>
	);
};


function App() {
	return (
		<ParallaxProvider>
			<div className="App">
						<Header />
				<div className='App-scroll'>
					<p> Scroll to read more</p>
					<i class="bi bi-chevron-double-down"></i>
				</div>

				<div className="my-4 mx-2">
					In 2021 I got my bachelor's degree in <b>Computer Science Engineering</b> at the <b>Università degli Studi di Palermo</b>.
				</div>
				<div className="my-4 mx-2">
					I'm currently studying to get a Master's degree in <b>Artificial Intelligence and Data Analytics</b> at the <b>Politecnico di Torino</b>.
				</div>

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
			</div>
		</ParallaxProvider>

	);
}


export default App;
