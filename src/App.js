import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './assets/Pareiovision.png'
import './App.css';
import { ContactPage, HomePage } from "./pages";

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
            <Link to='/contact' className="ml2 link white">Contac TEst t</Link>
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
a
export default App;
