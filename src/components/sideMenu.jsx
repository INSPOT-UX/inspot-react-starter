import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import AppIndex from '../app_index.jsx';

// Basic Styles 정의
import StyleColor from './system_styles/color.jsx';
import GridSample1 from './grids/grid_sample1.jsx';

// Basic Components - Bootstrap & Custom Component
import CardsSample01 from './cards/cards_sample1.jsx';
import CardsSample02 from './cards/cards_sample2.jsx';
import ButtonSample from './btn/index.jsx';
import ButtonSample01 from './btn/btn_sample1.jsx';
import Tables from './tables.jsx';
import ModalSample01 from './modal/modal_sample1.jsx';
import TabSample01 from './tab/tab_sample1.jsx';
import CarouselSample1 from './carousel/carousel_sample1.jsx';

// Patterns - Design Patterns
import {PostHeaders} from './patterns/post_headers';

// Interaction Sample - 
import SplitBackSliderSample01 from './interaction_sample/split_back_slider01.jsx';

// Code Sample
import EventHoverSample01 from './code_sample/event_hover.jsx';
import ClickToggleSample01 from './code_sample/click_toggle.jsx';
import ScrollEventSample01 from './code_sample/event_scroll01.jsx';

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
              <NavLink to={`/cards_sample_2`} activeClassName="active">Cards Sample 2</NavLink>
            </li>
            <li className="depth2" >
              <NavLink to={`/carousel_sample_1`} activeClassName="active">Carousel Sample 1</NavLink>
            </li>
            <li className="depth2" >
              <NavLink to={`/modal_sample01`} activeClassName="active">Modal Sample 1</NavLink>
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
            <a className="disable-link">Interaction Sample</a>
          </li>
          <ul>
            <li className="depth2" >
              <NavLink to={`/interaction_sample/split_back_slider_sample01`} activeClassName="active">Split Back Slider 1</NavLink>
            </li>
          </ul>
          <li>
            <a className="disable-link">Code Sample</a>
          </li>
          <ul>
            <li className="depth2" >
              <NavLink to={`/code_sample/event_hover_sample01`} activeClassName="active">Hover Event Sample 1</NavLink>
            </li>
            <li className="depth2" >
              <NavLink to={`/code_sample/click_toggle_sample01`} activeClassName="active">Click Toggle Sample 1</NavLink>
            </li>
            <li className="depth2" >
              <NavLink to={`/code_sample/event_scroll_sample01`} activeClassName="active">Scroll Event Sample 1</NavLink>
            </li>
          </ul>         
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
          <Route path="/cards_sample_1" component={CardsSample01} />
          <Route path="/cards_sample_2" component={CardsSample02} />
          <Route path="/carousel_sample_1" component={CarouselSample1} />
          <Route path="/modal_sample01" component={ModalSample01} />
          <Route path="/patterns/post_header" component={PostHeaders} />
          <Route path="/tab_sample01" component={TabSample01} />
          <Route path="/interaction_sample/split_back_slider_sample01" component={SplitBackSliderSample01} />
          <Route path="/code_sample/event_hover_sample01" component={EventHoverSample01} />
          <Route path="/code_sample/click_toggle_sample01" component={ClickToggleSample01} />
          <Route path="/code_sample/event_scroll_sample01" component={ScrollEventSample01} />
                  
      </div>
      </Router>
    )
  }
}

export default SideMenu;



