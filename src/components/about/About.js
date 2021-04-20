import React from 'react';
import about from '../../images/about.png';

import './about.scss';

const About = () => {
	return(
		<div className="about-section">
			<div className="about-banner">
				<img src={about} />
				<div className="short-desc">
					<p>Lorem ipsum dolor sit amet<br/> consecteur adipiscing.</p>
				</div>
			</div>
			<div className="about">
				<div className="wrapper">
					<div className="about-content">
						<h3 className="main-title">ABOUT OUR COMPANY</h3>
						<h1 className="title">It just might inspire you<br/> to help us build a better future</h1>
						<p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pare Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default About;