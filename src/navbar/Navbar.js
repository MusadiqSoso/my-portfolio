import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../navbar/style.css";
import $ from "jquery";
const Navbar = () => {
	
	
	return (
		<nav className="navbar" role="navigation">
			<div className="container">
				<ul className="nav navbar-nav">
					<NavLink className="link" to="/" >
						HOME
					</NavLink>
					<NavLink className="link" to="/about" activeStyle={{color: "red"}}>
						ABOUT
					</NavLink>
					<NavLink className="link" to="/contact" activeStyle={{color: "red"}} >
						CONTACT
					</NavLink>
					<NavLink className="link" to="/resume" activeStyle={{color: "red"}} >
						RESUME
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
