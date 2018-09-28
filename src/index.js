import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as HashRouter } from 'react-router-dom';

import SideMenu from './components/sideMenu.jsx';

import './styles.scss';
import './css/system_style.scss';
import './css/custom/bootstrap.scss';


ReactDOM.render(
  <HashRouter>
    <div>
      <SideMenu>
      </SideMenu>
    </div>
  </HashRouter>
  ,
  document.getElementById('app')
);
