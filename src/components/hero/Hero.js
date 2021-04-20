import React from 'react';
import hero from '../../images/hero.png';
import { FaChevronRight, FaPhone, FaTelegramPlane, FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter, FaMapMarkerAlt} from 'react-icons/fa';
import './hero.scss';

const Hero = () => {
	return(
		<>
			<div className="hero-section">
				<div className="hero-content">
					<div className="content-wrapper">
						<h1>MSFDN<br/>MICHAEL STREETE FOUNDATION</h1>
						<p>A platform that serves as an incubator to level up social mobility for young </p>
						<span>CREATIVES and CREATORS.</span>
					</div>
				</div>
				<div className="hero-slider">
					<div className="controller">
						<span className="slider-text"> scroll to flip </span>
						<div className="slider-line"></div>
						<span className="slide-no">01/04</span>
					</div>
					<button className="button-primary"><FaChevronRight /> Donate now</button>
				</div>
			</div>
			
			<div className="sidebar-left">
				<div className="phone">
					<span>+ 44 20 8312 1731 <FaPhone /></span>
					<div className="box-border"></div>
				</div>
				<div className="mail">
					<div className="box-border"></div>
					<span><FaTelegramPlane />info@msfdn.com</span>
				</div>
			</div>
			<div className="sidebar-right">
				<div className="social-links">
					<a href="#"><FaFacebookF /></a>
					<a href="#"><FaTwitter /></a>
					<a href="#"><FaYoutube /></a>
					<a href="#"><FaLinkedinIn /></a>
				</div>
				<div className="location">
					<div className="box-border"></div>
					<span><FaMapMarkerAlt />The Link Thamesmead, Bazelgette Way SE2 9 London, UK</span>
				</div>
			</div>
		</>
	)
}
export default Hero;