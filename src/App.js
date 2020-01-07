
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './assets/Pareiovision.png'
import './App.css';
import { ContactPage, HomePage } from "./pages";
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
        <Router>
          <nav className='flex-column flex-l justify-center justify-between-l items-center items-start-l'>
            {/*<div className="link flex justify-center items-center justify-between-ns">*/}
            <Link to="/" className="link dim">
              <div className=" ma0 w-25-ladd relative flex-column justify-start-l justify-center items-center">
                <img src={logo} alt=""/>
                <img src={logo} alt=""/>
                <img src={logo} alt=""/>
              {/*</div>*/}
              </div>
            </Link>
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
    );
  }
}

export default App;

