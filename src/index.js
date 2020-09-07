import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Switch,Route,withRouter} from "react-router-dom";

import About from '../src/pages/about/about';
import Contact from '../src/pages/contact/contact';
import Resume from '../src/pages/resume/resume';




ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);


