import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar" role="navigation">
			<div className="container">
				<ul className="nav navbar-nav">
					<Link className="link" to="/">
						HOME
					</Link>
					<Link className="link" to="/about">
						ABOUT
					</Link>
					<Link className="link" to="/contact">
						CONTACT
					</Link>
					<Link className="link" to="/resume">
						RESUME
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
