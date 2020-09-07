import React from "react";
import "../../pages/home /style.css";

import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Layout from "../../container/layout.container";
import Homecomp from "../../components/home-comp/homecomp";

const Home = () => {
	return (
		<div className="bg">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Home | Musadiq Soso</title>
			</Helmet>
			<Container className="Home-main">
				<Homecomp />
			</Container>
		</div>
	);
};

export default Home;
