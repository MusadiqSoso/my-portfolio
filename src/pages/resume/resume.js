import React from 'react';
import '../../pages/resume/style.css';

import {
  Container,
  Row
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/about_particle';
import {Helmet} from 'react-helmet';
import Navbar from "../../components/navbar/navbar";
import { Document } from 'react-pdf';
import pdfFile from '../../resume.pdf';
import Layout from '../../container/layout.container';

const Resume = () => {
  
  return (
      <div>
         <Helmet>
                    <meta charSet="utf-8" />
                    <title>Resume | Musadiq Soso</title>
                    <meta name="description" content="Musadiq Soso | Front End Developer | Software Engineer" />
              </Helmet>
              <Navbar/>
          <Animate to="1" from="0" attributeName="opacity">
            
          <Container className="App-header" fluid={true}>
              <Layout/>
            <Row className="App-main">
             <Document file={pdfFile}/>
            </Row>
           
        </Container>
        </Animate>
      </div>
    );
}

export default Resume;