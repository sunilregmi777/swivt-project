import React from 'react';
import logo from '../../images/logo.png';
import menu from '../../images/menu.png';
import cart from '../../images/cart.svg';
import search from '../../images/search.svg';
import notification from '../../images/notification.svg';
import user from '../../images/user.svg';

import './navbar.scss';

const NavBar = () => {
	return(
		<header>
			<div className="wrapper">
				<nav className="navbar justify-content-between">
					<div className="icon-menu-wrapper">
						<a className="logo" href = "#"><img src={logo}/></a>
						<a className="menu-icon" href = "#"><img src={menu}/>Menu</a>
					</div>
					<div className="icon-menu">
						<a href="#"><img src={cart} /></a>
						<a href="#"><img src={search} /></a>
						<a href="#"><img src={notification} /></a>
						<a href="#"><img src={user} /></a>
					</div>
				</nav>
			</div>
		</header>
	)
}
export default NavBar;