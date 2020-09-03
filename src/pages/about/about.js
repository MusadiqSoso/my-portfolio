import React from 'react';
import '../../pages/about/style.css';
import {Container, Row,Col} from 'react-bootstrap';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import particles from '../../const/about_particle';
import Particles from 'react-particles-js';
import Layout from '../../container/layout.container';
import Aboutcomp from '../../components/about-comp/aboutcomp';

const About = () =>  {
        return (
            
              <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About | Musadiq Soso</title>

              </Helmet>
              <Container className="About-header" fluid={true}>
               
               <Layout/>
               <Row className="About-main">
                 
                 <Aboutcomp/>
                 
               
             </Row>
               
           </Container>
              </div> 
              
        );  
        }


export default About;