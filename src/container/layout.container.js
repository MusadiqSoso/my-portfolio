import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, withRouter, Link } from "react-router-dom";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import Resume from "../pages/resume/resume";
import Home from "../pages/home /home";
import Navbar from "../navbar/Navbar";

const history = createBrowserHistory();

const Layout = () => {
	return (
		<div>
			<Router history={history}>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/resume" component={Resume} />
			</Switch>
		</Router>
		
		</div>
		
		



	);
};
export default Layout;
