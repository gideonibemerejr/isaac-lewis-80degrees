import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import { ContactPage, HomePage } from "./pages";

export default class App extends Component {
  render() {
    return (
        <Router>
          <div className="sans-serif ma3">
            <nav className='red flex justify-between items-center'>
              <div className="link">
                <Link to="/" className="link"><h2 className='f2 ma0'>Issac Lewis</h2></Link>
              </div>
              <ul className="pa0 flex justify-around list">

                <li>
                  <a rel='noopener noreferrer' target='_blank' className='link' href="http://shop.pareiovision.com">Shop</a>
                </li>
                <li>
                  <Link to='/' className="ml2 link">Listen</Link>
                </li>
                <li>
                  <Link to='/contact' className="ml2 link">Contact</Link>
                </li>
              </ul>
            </nav>
            <Route exact path="/" component={HomePage}/>
            <Route path="/contact" component={ContactPage}/>
          </div>

          <Route/>
        </Router>

    )
  }
}


