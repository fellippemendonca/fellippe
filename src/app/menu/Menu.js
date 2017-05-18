import React from 'react';
import './Menu.css';
//import Clock from '../clock/Clock';
import PageSelect from '../PageSelect';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 'home'};
    this.homeMenuClick = this.homeMenuClick.bind(this);
    this.bioMenuClick = this.bioMenuClick.bind(this);
    this.workMenuClick = this.workMenuClick.bind(this);
    this.contactMenuClick = this.contactMenuClick.bind(this);
  }

  homeMenuClick(e) {
    e.preventDefault();
    this.setState({page: 'home'});
  }
  bioMenuClick(e) {
    e.preventDefault();
    this.setState({page: 'bio'});
  }
  workMenuClick(e) {
    e.preventDefault();
    this.setState({page: 'work'});
  }
  contactMenuClick(e) {
    e.preventDefault();
    this.setState({page: 'contact'});
  }

  render() {
    return (
      <div className={"Menu-"+this.state.page}>
        <nav className="Nav-1">
            <a className="Link-1" href="" onClick={this.homeMenuClick}>Home</a>
            <a className="Link-1" href="" onClick={this.bioMenuClick}>Bio</a>
            <a className="Link-1" href="" onClick={this.workMenuClick}>Work</a>
            <a className="Link-1" href="" onClick={this.contactMenuClick}>Contact</a>
        </nav>        
        <div className="UpSpace"/>
          <PageSelect name={this.state.page}/>
        <div className="DownSpace"/>
      </div>
    );
  }
}

export default Menu;
            /*<Clock/>*/
