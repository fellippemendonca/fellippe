import React from 'react';
import logo from './logo.svg';
import vvPng from '../../assets/images/viavarejo.png';
import kiddo from '../../assets/images/kiddo.jpg';

import './Home.css';

function Home(props) {
  var linkStyle = {color: 'white'};
  return (
    <div className="Contents">
      <div className="Home">
        <h1>Hi, I'm {props.owner}!</h1>
        <a href="https://facebook.github.io/react/">
          <img src={logo} className="Home-logo" alt="logo"/>
        </a>
        <h2>Software Developer at</h2>
          <a href="http://kiddolabs.com/" style={linkStyle}>
            <img src={kiddo} className="kiddo" alt="kiddo" style={{width: 190, height: 130, backgroundColor:'rgba(255,255,255,0.7)'}} />
          </a>
      </div>
    </div>
  );
}
export default Home;
