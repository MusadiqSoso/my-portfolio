import React from 'react';
import '../../pages/home /style.css';

import {
  Container,
  Row
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/about_particle';
import {Helmet} from 'react-helmet';
import Layout from '../../container/layout.container';
import Homecomp from '../../components/home-comp/homecomp';



const Home = () => {
  
  return (
      <div>
        <div id="home" className="intro ">
         <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home | Musadiq Soso</title>
                    
              </Helmet>
              
          <Animate to="1" from="0" attributeName="opacity">
            <Container className="App-header" fluid={true}>
          <Layout/>
          
          
            <Row className="App-main">
            <Homecomp/>
             
            </Row>
           
        </Container>
        </Animate>
      </div>
      </div>
    );
}

export default Home;