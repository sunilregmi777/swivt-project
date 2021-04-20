import React from 'react';
import testimonialImg from '../../images/testi.png';
import {FaStar ,FaChevronRight,FaChevronLeft} from 'react-icons/fa';
import Slider from "react-slick";
import './testimonials.scss';

const Teatimonials = () => {
	var settings = {
	    dots: true,
	    infinite: false,
	    speed: 500,
	    slidesToShow: 2,
	    slidesToScroll: 1,
      	cssEase: "linear",
	    prevArrow: <FaChevronLeft />,
		nextArrow: <FaChevronRight />,
		responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                dots:false
              }
            },
        ]
	};
	return(
		<div className="testimonials">
			<div className="wrapper">
				<div className="about-content">
					<h3 className="main-title">WE'RE FAMOUS</h3>
					<h1 className="title">What others have to say <br/>about us!</h1>
				</div>
				<Slider {...settings}>
					<div className="testimonials-slider">
						<div className="testimonials-slide">
							<img src={testimonialImg} alt="Writer Photo" />
							<div className="testimonials-content">
								<div className="testimonials-header">
									<div className="name-desc">
										<h3>Secure Payments</h3>
										<span>/ Business owner at co.chart</span>
									</div>
									<div className="rating">
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
									</div>
								</div>
								<div className="testimonials-footer">
									<span>Great service, great quality would recommend with nothing more, nothing less. Thank you MSFDN and will use again in the future for sure.</span>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonials-slider">
						<div className="testimonials-slide">
							<img src={testimonialImg} alt="Writer Photo" />
							<div className="testimonials-content">
								<div className="testimonials-header">
									<div className="name-desc">
										<h3>Secure Payments</h3>
										<span>/ Business owner at co.chart</span>
									</div>
									<div className="rating">
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
									</div>
								</div>
								<div className="testimonials-footer">
									<span>Great service, great quality would recommend with nothing more, nothing less. Thank you MSFDN and will use again in the future for sure.</span>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonials-slider">
						<div className="testimonials-slide">
							<img src={testimonialImg} alt="Writer Photo" />
							<div className="testimonials-content">
								<div className="testimonials-header">
									<div className="name-desc">
										<h3>Secure Payments</h3>
										<span>/ Business owner at co.chart</span>
									</div>
									<div className="rating">
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
									</div>
								</div>
								<div className="testimonials-footer">
									<span>Great service, great quality would recommend with nothing more, nothing less. Thank you MSFDN and will use again in the future for sure.</span>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonials-slider">
						<div className="testimonials-slide">
							<img src={testimonialImg} alt="Writer Photo" />
							<div className="testimonials-content">
								<div className="testimonials-header">
									<div className="name-desc">
										<h3>Secure Payments</h3>
										<span>/ Business owner at co.chart</span>
									</div>
									<div className="rating">
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
									</div>
								</div>
								<div className="testimonials-footer">
									<span>Great service, great quality would recommend with nothing more, nothing less. Thank you MSFDN and will use again in the future for sure.</span>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonials-slider">
						<div className="testimonials-slide">
							<img src={testimonialImg} alt="Writer Photo" />
							<div className="testimonials-content">
								<div className="testimonials-header">
									<div className="name-desc">
										<h3>Secure Payments</h3>
										<span>/ Business owner at co.chart</span>
									</div>
									<div className="rating">
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
									</div>
								</div>
								<div className="testimonials-footer">
									<span>Great service, great quality would recommend with nothing more, nothing less. Thank you MSFDN and will use again in the future for sure.</span>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonials-slider">
						<div className="testimonials-slide">
							<img src={testimonialImg} alt="Writer Photo" />
							<div className="testimonials-content">
								<div className="testimonials-header">
									<div className="name-desc">
										<h3>Secure Payments</h3>
										<span>/ Business owner at co.chart</span>
									</div>
									<div className="rating">
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
									</div>
								</div>
								<div className="testimonials-footer">
									<span>Great service, great quality would recommend with nothing more, nothing less. Thank you MSFDN and will use again in the future for sure.</span>
								</div>
							</div>
						</div>
					</div>
				</Slider>
				<div className="controls">
					<div className="hero-slider">
						<div className="controller">
							<span className="slider-text"> scroll to flip </span>
							<div className="slider-line"></div>
							<span className="slide-no">01/04</span>
						</div>
						<button className="button-primary"><FaChevronRight /> View more</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Teatimonials;