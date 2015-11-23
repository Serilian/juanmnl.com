import React from 'react';
import { Link } from 'react-router';

let ACTIVE = {color: '#009eff'};

const Navbar = React.createClass({
	render() {
		return (
			<nav className="navbar">
				<ul>
					<li>
						<Link to="/" activeStyle={ ACTIVE }>
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" activeStyle={ ACTIVE }>
							About
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
});

export default Navbar;
