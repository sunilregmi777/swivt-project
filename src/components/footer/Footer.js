import React from 'react';
import footerlogo from '../../images/footerlogo.png';
import {FaHeart, FaShareAlt, FaBookmark, FaChevronRight, FaYoutube, FaLinkedinIn, FaTwitter, FaFacebookF} from 'react-icons/fa';

import './footer.scss';

const Footer = () => {
	return(
		<div className="footer">
			<div className="wrapper">
				<div className="footer-contents">
					<div className="about-company">
						<img src={footerlogo} />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodwori tempor incididunt utLorem ipsum dolor sitroiwi amet, consecteturopeiiiwoti
							adipiscing elit, sed do eiusmod tempor incididunt utlabore etro doloreropwr magna aliqua. Ut enim adroir minim veniam, quis nostrud exercitationwteeii  eiusmod tempor incididunt utLorem ipsum dolor sitroiwi amet, seadipiscing elit, sed do eiusmod tempor ullamc.</p>
						<div className="footer-social-icons">
							<a href="#"><FaFacebookF /></a>
							<a href="#"><FaLinkedinIn /></a>
							<a href="#"><FaYoutube /></a>
							<a href="#"><FaTwitter /></a>
						</div>
					</div>
					<div className="footer-links">
						<h3>Quick links</h3>
						<ul>
							<li><a href="#">Section One</a></li>
							<li><a href="#">Section One</a></li>
							<li><a href="#">Section One</a></li>
							<li><a href="#">Section One</a></li>
							<li><a href="#">Section One</a></li>
							<li><a href="#">Section One</a></li>
						</ul>
					</div>
					<div className="news-letter">
						<form>
							<h3>Newsletter subscription</h3>
						 	<div className="row">
							    <div className="col">
							    	<input type="text" className="form-control" placeholder="First name" />
							    </div>
							    <div className="col">
							     	<input type="text" className="form-control" placeholder="Last name" />
							    </div>
						  	</div>
						 	<div className="row">
							    <div className="col">
							    	<input type="email" className="form-control" placeholder="Email address" />
						  		</div>
						  	</div>
						  	<div className="row">
							    <div className="col">
							    	<input type="submit" className="form-control button-primary" value="subscribe now"/>
						  		</div>
						  	</div>
						  	<div className="row">
							    <div className="col">
							    	<div className="copyright">
							    		<span>Copyright @ <strong>AFEX</strong> 2020 Made with love by Khalid</span>
							    		<span className="line"></span>
							    		<span><strong>About Afex</strong>Terms & condition</span>
							    	</div>
						  		</div>
						  	</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer;