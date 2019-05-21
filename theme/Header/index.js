import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss';

const Header = ({ onLogout, userIsLoggedIn }) => {

	return (
		<header>
			<div className={'menu-container flex'}>
				<div className={'flex-1 flex justify-center'}>
					<NavLink to="/about" activeClassName="menu-active">About</NavLink>
				</div>
				<div className={'flex-1 flex justify-center'}>
					<NavLink to="/posts" activeClassName="menu-active">Blog</NavLink>
				</div>
				{
					!userIsLoggedIn ?
						<React.Fragment>
							<div className={'flex-1 flex justify-center'}>
								<NavLink to="/registration" activeClassName="menu-active">Register</NavLink>
							</div>
							<div className={'flex-1 flex justify-center'}>
								<NavLink to="/login" activeClassName="menu-active">Login</NavLink>
							</div>
						</React.Fragment> :
						<div className={'flex-1 flex justify-center'}>
							<button type="button" onClick={onLogout} >Logout</button>
						</div>
				}
			</div>
		</header>
	)
};

export default Header;
