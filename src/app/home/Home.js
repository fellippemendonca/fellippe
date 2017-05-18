import React from 'react';
import logo from './logo.svg';
import './Home.css';

function Home(props) {
  var linkStyle = {color: 'white'};
  return (
    <div className="Contents">
      <div className="Home">
        <h1>Hi, I'm {props.owner}!</h1>
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>Software Developer at <a href="http://www.viavarejo.com.br/" style={linkStyle}>ViaVarejo</a>.</h2>
      </div>
    </div>
  );
}
export default Home;
