import React from "react";
import {  BrowserRouter as Router,Switch,  Route, withRouter } from 'react-router-dom';
import About from '../pages/about/about';
import Contact from '../pages/contact/contact';
import Resume from '../pages/resume/resume';
import Navbar from '../components/navbar/navbar';
import Home from '../pages/home /home';


const Layout = () => {
   return(
    <div>
        
        
     <Router>
        <div>
        <Navbar/>
        </div>
         
         <Switch>
         <Route exact path="/home" component={withRouter(Home)} />
         <Route exact path="/about" component={withRouter(About)} />
         <Route exact path="/contact" component={withRouter(Contact)} />
         <Route exact path="/resume" component={withRouter(Resume)} />
         </Switch>
    
    </Router>
    </div>

   );
    

   
};
 export default Layout;