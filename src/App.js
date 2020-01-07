import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './assets/Pareiovision.png'
import './App.css';
import { ContactPage, HomePage } from "./pages";

const App = () => {
  return (
  <Router>
      <nav className='flex-column-m flex justify-center justify-between-ns items-center mb2'>
        {/*<div className="link flex justify-center items-center justify-between-ns">*/}

          <div className="w-25-l w-75-m relative">
            <Link to="/" className="link dim">
              <img className="relative" style={{"top": 0, "left": 0}} src={logo} alt=""/>
              <img className="absolute" style={{"top": 0, "left": 0}} src={logo} alt=""/>
              <img className="absolute" style={{"top": 0, "left": 0}} src={logo} alt=""/>
            </Link>
          {/*</div>*/}
        </div>
        <ul className="pa0 flex justify-around list mt4 mt0-l">
          <li>
            <a rel='noopener noreferrer' target='_blank' className='link white dim' href="http://shop.pareiovision.com">Shop</a>
          </li>
          <li>
            <Link to='/' className="ml4 link white dim">Listen</Link>
          </li>
          <li>
            <Link to='/contact' className="ml4 link white dim">Contact</Link>
          </li>
          </ul>
      </nav>
      <Route exact path="/" component={HomePage}/>
      <Route path="/contact" component={ContactPage}/>


    <Route/>
  </Router>
  )
}
export default App;
