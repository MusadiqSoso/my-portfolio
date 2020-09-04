import React from "react";
import "../../pages/contact/style.css";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Layout from "../../container/layout.container";
import Contactcomp from "../../components/contact-comp/contactcomp";

const Contact = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Contact | Musadiq Soso</title>
			</Helmet>
			<Container className="Contact-header">
				<Row className="Contact-main">
					<Contactcomp />
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
