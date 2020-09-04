import React from 'react';
import '../../pages/about/style.css';
import {Container} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import Layout from '../../container/layout.container';
import Aboutcomp from '../../components/about-comp/aboutcomp';

const About = () =>  {
        return (
            
              <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About | Musadiq Soso</title>

              </Helmet>
              
               
               <Layout/>
               <Container className="About-main" >
               
                 <Aboutcomp/>
               
               </Container>
              </div> 
              
        );  
        }


export default About;