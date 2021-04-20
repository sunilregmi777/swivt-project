import React from 'react';
import whatwedo from '../../images/feature.png';
import {FaHeart, FaShareAlt, FaBookmark, FaChevronRight} from 'react-icons/fa';

import './whatwedo.scss';

const WhatWeDo = () => {
	return(
		<div className="whatwedo-section">
			<div className="wrapper">
				<div className="text-right">
					<h3 className="main-title">What we do</h3>
					<h1 className="title">We do more than you <br/>ever expect!</h1>
				</div>
				<div className="our-works">
					<div className="card-deck">
						<div className="card">
							<img className="card-img-top" src={whatwedo} alt="Card image cap" />
							<div className="card-body">
								<div className="card-options">
									<div className="empty-box"></div>
									<div className="options">
										<FaHeart />
										<FaBookmark />
										<FaShareAlt />
									</div>
								</div>
							  	<h5 className="card-title">Lorem Ipsum</h5>
							  	<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
					  	<div className="card">
							<img className="card-img-top" src={whatwedo} alt="Card image cap" />
							<div className="card-body">
								<div className="card-options">
									<div className="empty-box"></div>
									<div className="options">
										<FaHeart />
										<FaBookmark />
										<FaShareAlt />
									</div>
								</div>
							  	<h5 className="card-title">Lorem Ipsum</h5>
							  	<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
					</div>
					<div className="card-deck">
						<div className="card">
							<img className="card-img-top" src={whatwedo} alt="Card image cap" />
							<div className="card-body">
								<div className="card-options">
									<div className="empty-box"></div>
									<div className="options">
										<FaHeart />
										<FaBookmark />
										<FaShareAlt />
									</div>
								</div>
							  	<h5 className="card-title">Lorem Ipsum</h5>
							  	<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						<div className="card">
							<img className="card-img-top" src={whatwedo} alt="Card image cap" />
							<div className="card-body">
								<div className="card-options">
									<div className="empty-box"></div>
									<div className="options">
										<FaHeart />
										<FaBookmark />
										<FaShareAlt />
									</div>
								</div>
							  	<h5 className="card-title">Lorem Ipsum</h5>
							  	<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
					</div>
					<button className="button-primary"><FaChevronRight />View more</button>
				</div>
			</div>
		</div>
	)
}
export default WhatWeDo;