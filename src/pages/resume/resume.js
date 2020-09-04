import React from 'react';
import '../../pages/resume/style.css';

import {
  Container,
  Row
} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import { Document } from 'react-pdf';
import Layout from '../../container/layout.container';

const Resume = () => {
  
  return (
      <div>
         <Helmet>
                    <meta charSet="utf-8" />
                    <title>Resume | Musadiq Soso</title>
                    <meta name="description" content="Musadiq Soso | Front End Developer | Software Engineer" />
              </Helmet>
              
          
            
          <Container className="App-header" >
              <Layout/>
            <Row className="App-main">
             <Document file={"./resume.pdf"}/>
            </Row>
           
        </Container>
        
      </div>
    );
}

export default Resume;