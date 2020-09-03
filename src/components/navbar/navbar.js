import React from "react";
import '../../components/navbar/style.css';
import { BrowserRouter as Router,Link} from "react-router-dom";




const  Navbar = () => {
    return (
       
        
      <nav className="navbar"  role="navigation">
        <div className="container-fluid">
            <ul className="nav navbar-nav">
            <Router>
            <Link  className="link" to="/home" >HOME</Link>
            <Link  className="link" to="/about" >ABOUT</Link>
            <Link className="link" to="/contact" >CONTACT</Link>
            <Link className="link" to="/resume" >RESUME</Link>
            </Router>
            </ul>
        </div>
      </nav>
      
    );
  };


export default Navbar;