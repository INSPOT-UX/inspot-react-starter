import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { First, Second, Third } from './components/app.jsx';
import Home from './components/home.jsx';

import './css/header.scss';

class Header extends React.Component {
    render() {
      return (
        <header className="header-wrap">
          <ul className="menu-wrap">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/first'}>첫번째</NavLink></li>
            <li><NavLink to={'/second'}>두번째</NavLink></li>
            <li><NavLink to={'/third'}>세번째</NavLink></li>
          </ul>
          <button className="burger-wrap">sdads</button>
        </header>
      );
    }
  }

export class AppIndex extends React.Component {
    render(){
        return(
        <Router>          
            <div className="app-wrap">
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/first" component={First} />
                <Route path="/second" component={Second} />
                <Route path="/third" component={Third} />
            </div>
        </Router>
  )
}
}

export default AppIndex;
