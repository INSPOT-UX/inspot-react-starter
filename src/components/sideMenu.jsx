import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import AppIndex from '../app_index.jsx';

import StyleColor from './system_styles/color.jsx';
import GridSample1 from './grids/grid_sample1.jsx';
import CardsSample1 from './cards/cards_sample1';
import ButtonSample from './btn/index.jsx';
import ButtonSample01 from './btn/btn_sample1.jsx';
import TabSample01 from './tab/tab_sample1.jsx';
import Tables from './tables.jsx';
import {PostHeaders} from './patterns/post_headers';
import CarouselSample1 from './carousel/carousel_sample1.jsx';

import '../css/sideMenuSample.scss'


  export class SideNavBar extends React.Component {

    render(){
      return(
    <nav className="side-menu-bar">
      <div className="menu-wrap">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">Overview</NavLink>
          </li>

          <li>
            <a className="disable-link">Styles</a>
          </li>

          <ul>
            <li className="depth2" >
              <NavLink to={`/system_styles/style_color`} activeClassName="active">Colors</NavLink>
            </li>
            
            <li className="depth2" >
              <NavLink to={`/grids/grid_sample1`} activeClassName="active">Grid Sample 1</NavLink>
            </li>
          </ul>
          
          <li>
            <a className="disable-link">Components</a>
          </li>
          <ul>
            <li className="depth2" >
              <NavLink to={`/button_sample`} activeClassName="active">Button</NavLink>              
            </li>
            <li className="depth2" >
              <NavLink to={`/button_sample01`} activeClassName="active">Button Sample 1</NavLink>
            </li>
            <li className="depth2" >
              <NavLink to={`/tables`} activeClassName="active">Tables</NavLink>
            </li>
            <li className="depth2" >
              <NavLink to={`/cards_sample_1`} activeClassName="active">Cards Sample 1</NavLink>
            </li>
            <li className="depth2" >
              <NavLink to={`/carousel_sample_1`} activeClassName="active">Carousel Sample 1</NavLink>
            </li>
            <li className="depth2" >
              <NavLink to={`/tab_sample01`} activeClassName="active">Tab Sample 1</NavLink>
            </li>
          </ul>

          <li>
            <a className="disable-link">Patterns</a>
          </li>
          <ul>
            <li className="depth2" >
              <NavLink to={`/patterns/post_header`} activeClassName="active">Post Headers</NavLink>
            </li>
          </ul>
          <li>
            <a className="disable-link">Code Clips</a>
          </li>          
        </ul>
      </div>
    </nav>
    )
    }
  } 

export class SideMenu extends React.Component {
  render(){
    return (
      <Router>
      <div className="out-wrap">
        <SideNavBar />        
        
          <Route exact path="/" component={AppIndex} />
          <Route path="/system_styles/style_color" component={StyleColor} />
          <Route path="/grids/grid_sample1" component={GridSample1} />
          <Route path="/button_sample" component={ButtonSample} />
          <Route path="/button_sample01" component={ButtonSample01} />
          <Route path="/tables" component={Tables} />
          <Route path="/cards_sample_1" component={CardsSample1} />
          <Route path="/carousel_sample_1" component={CarouselSample1} />
          <Route path="/patterns/post_header" component={PostHeaders} />
          <Route path="/tab_sample01" component={TabSample01} />
                  
      </div>
      </Router>
    )
  }
}

export default SideMenu;



