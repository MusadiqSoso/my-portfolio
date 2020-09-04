import React from "react";
import "../../pages/about/style.css";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Aboutcomp from "../../components/about-comp/aboutcomp";

const About = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>About | Musadiq Soso</title>
			</Helmet>
			<Container className="About-main">
				<Aboutcomp />
			</Container>
		</div>
	);
};

export default About;
