import React from 'react';
import '../../pages/contact/style.css';
import {Container, Row} from 'react-bootstrap';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import particles from '../../const/contact_particle.js';
import Particles from 'react-particles-js';
import Layout from '../../container/layout.container';
import Contactcomp from '../../components/contact-comp/contactcomp';

const Contact = () => {
    return (
      <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Musadiq Soso</title>
                
        </Helmet>
        
        <Animate to="1" from="0" attributeName="opacity">
          
          <Container className="Contact-header" fluid={true}>
              <Layout/>
           <Row className="Contact-main">
           <Contactcomp/>
            </Row>
             </Container>
       </Animate>
      </div>
    )
  }

export default Contact