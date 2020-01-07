import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './assets/Pareiovision.png'
import './App.css';
import { ContactPage, HomePage } from "./pages";

<<<<<<< HEAD
const App = () => {
  return (
  <Router>
    <div className="sans-serif bg-black">
      <nav className='flex-ns flex-column justify-center items-center pa2'>
        <div className="link flex justify-center items-center">
          <div className="w-75 ma3">
            <Link to="/" className="link">
              <img src={logo} alt=""/>
            </Link>
          </div>
        </div>
        <ul className="pa0 flex justify-around list">
          <li>
            <a rel='noopener noreferrer' target='_blank' className='link white' href="http://shop.pareiovision.com">Shop</a>
          </li>
          <li>
            <Link to='/' className="ml2 link white">Listen</Link>
          </li>
          <li>
            <Link to='/contact' className="ml2 link white">Contact</Link>
          </li>
          </ul>
      </nav>
      <Route exact path="/" component={HomePage}/>
      <Route path="/contact" component={ContactPage}/>
    </div>
=======
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
>>>>>>> 75e44ec1e5af552148b0cae08e0df47d617b8370

          <Route/>
        </Router>

    )
  }
}


