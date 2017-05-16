import React from 'react';
import './Menu.css';

class Menu extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() { }

  // componentWillUnmount() { }

  render() {
    return (
      <div className="Menu">
        <nav className="Nav-1">
          <a className="Link-1" href="#">Home</a>
          <a className="Link-1" href="#">Bio</a>
          <a className="Link-1" href="#">Work</a>
          <a className="Link-1" href="#">Contact</a>
        </nav>
      </div>
    );
  }
}

export default Menu;
