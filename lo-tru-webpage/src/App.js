import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './logo.svg';
import './App.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { ParallaxProvider, ParallaxBannerLayer, ParallaxBanner } from 'react-scroll-parallax';

const Header = () => {

	return (
		<ParallaxBanner
			layers={[{
				children: <div className='inset center px-2'>
					<Container fluid><h1>
						<b>Samuele<br/>Lo Truglio</b>
					</h1></Container>
					<Container fluid>
						<h2>
							Computer Science Engineer
						</h2>
					</Container>
					<Container className='pt-4'>
						<p>
						I'm <b>23 years old</b> and I live in <b>Torino</b>.
						</p>
					</Container>
				</div>
				
				,
				translateY: [0, 30],
				scale: [1, 0.70, "easeOutCubic"],
				shouldAlwaysCompleteAnimation: true,
				expanded: false,
			}]}
			style={{ aspectRatio: '2/1' }}
			className="full"
		/>
	);
};


function App() {
	return (
		<ParallaxProvider>
			<div className="App">
				<header className="App-header">
					<div className="container expanded">
						<Header/>
					</div>
				</header>
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
