import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';

//const element = (<h1>Hello!</h1>);

function tick() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);
