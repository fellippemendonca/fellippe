import React from 'react';
import logo from './logo.svg';
import './Home.css';
import Clock from '../clock/Clock';

function Home(props) {
  return (
    <div className="Home">
      <div className="Home-header">
        <h1>Hi, I'm {props.owner}!</h1>
        <img src={logo} className="Home-logo" alt="logo" />
        <Clock/>
      </div>
    </div>
  );
}
export default Home;
