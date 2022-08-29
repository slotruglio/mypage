// import from node modules
import {Row, Col} from 'react-bootstrap';
import {ParallaxBanner} from 'react-scroll-parallax';
// import from custom libraries
import { Title, Description, ScrollText } from './Language';
import { SocialHeader } from './Social';
// import assets
import matrix from '../assets/img/background.png';

const Header = () => {
	const text = {
		children:
			<>
				<Row xs={1} md={1} lg={2} className="center px-2 justify-content-center">
					<Col className='my-2 text-lg-end' len><h1 className='accent'><b>Samuele Lo Truglio</b></h1></Col>
					<Col className='my-2 text-lg-start'><Title /></Col>
					<Col fluid className='my-4'><Description /></Col>

				</Row>
				<Row xs={1} md={1} lg={1} className="center px-2 justify-content-center">
					<Col className='my-2 px-2'><SocialHeader isLinkedin /></Col>
					<Col className="my-2 px-2"><SocialHeader /></Col>
				</Row>
				<Row xs={1} md={1} lg={1} className="end px-2"><Col className="text-lg-center">
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
		opacity: [.2, .0],
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

export default Header;