import React from 'react';
import logo from './logo.svg';
import './Welcome.css';
import Clock from '../clock/Clock';

function Welcome(props) {
  return (
    <div className="Welcome">
      <div className="Welcome-header">
        <h1>Hi, I'm {props.owner}!</h1>
        <img src={logo} className="Welcome-logo" alt="logo" />
        <Clock/>
      </div>
    </div>);
}
export default Welcome;
