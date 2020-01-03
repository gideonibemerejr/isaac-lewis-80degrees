import React from 'react';
import { BrowswerRouter as Router, Route } from 'react-router-dom'
import './App.css';
import {ContactPage, HomePage} from "./pages";

const App = () => {
  return (
  <Router>
    <Route exact path="/" component={HomePage}/>
    <Route path="/contact" component={ContactPage}/>
    <Route/>
  </Router>
  )
}

export default App;
