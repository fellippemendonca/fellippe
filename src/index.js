import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './app/welcome/Welcome';
import Menu from './app/menu/Menu';
import './index.css';
ReactDOM.render(
  <div>
    <Menu/>
    <Welcome owner='Fellippe'/>
  </div>
  ,
  document.getElementById('root')
);
