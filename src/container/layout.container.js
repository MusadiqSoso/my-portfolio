import React from "react";
import {  BrowserRouter as Router,Switch,  Route, withRouter,Link } from 'react-router-dom';
import About from '../pages/about/about';
import Contact from '../pages/contact/contact';
import Resume from '../pages/resume/resume';
import Home from '../pages/home /home';
import "../container/style.css";



const Layout = () => {
   return(
    <div>
        
        
     <Router>
        
     <nav className="navbar"  role="navigation">
        <div className="container">
            <ul className="nav navbar-nav">
            
            <Link  className="link" to="/home" >HOME</Link>
            <Link  className="link" to="/about" >ABOUT</Link>
            <Link className="link" to="/contact" >CONTACT</Link>
            <Link className="link" to="/resume" >RESUME</Link>
            
            </ul>
        </div>
      </nav>
        
         
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