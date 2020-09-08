import React from "react";
import "../../pages/resume/style.css";

import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Document } from "react-pdf";
import Layout from "../../container/layout.container";
import Pic from "../../img/fbg2.jpg";
import Pdf from "../resume/MusadiqFinal.pdf";

const Resume = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Resume | Musadiq Soso</title>
			</Helmet>
			<Container className="Resume-header">
				<Row className="Resume-main">
        <section id="resume" className="resume-mf sect-pt4 route " >
        <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="box-shadow-full">
                      <div className="row">
                        <div className="col-md-6">
                        <iframe width="850" height="600px" src={Pdf}/>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
            </section>
					
				</Row>
			</Container>
		</div>
	);
};

export default Resume;
