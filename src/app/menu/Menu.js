import React from 'react';
import './Menu.css';
import Clock from '../clock/Clock';
import PageSelect from '../PageSelect';


class Menu extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {page: 'home'};
    this.getState = this.getState.bind(this);
    this.homeMenuClick = this.homeMenuClick.bind(this);
    this.bioMenuClick = this.bioMenuClick.bind(this);
    this.workMenuClick = this.workMenuClick.bind(this);
    this.contactMenuClick = this.contactMenuClick.bind(this);
  }

  getState(){
    return this.props;
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
      <div className="Menu">
        <div class="Table">
          <div class="row">
            <div class="col-lg-10">
              <nav className="Nav-1">
                <a className="Link-1" href="" onClick={this.homeMenuClick}>Home</a>
                <a className="Link-1" href="" onClick={this.bioMenuClick}>Bio</a>
                <a className="Link-1" href="" onClick={this.workMenuClick}>Work</a>
                <a className="Link-1" href="" onClick={this.contactMenuClick}>Contact</a>
              </nav>
            </div>
            <div class="col-lg-2">
             
            </div>
          </div>
        </div>
        <PageSelect name={this.state.page}/>
      </div>
    );
  }
}

export default Menu;


/* <a className="Link-1"><Clock/></a>
<div className="Menu">
        <nav className="Nav-1">
          <a className="Link-1" href="" onClick={this.homeMenuClick}>Home</a>
          <a className="Link-1" href="" onClick={this.bioMenuClick}>Bio</a>
          <a className="Link-1" href="" onClick={this.workMenuClick}>Work</a>
          <a className="Link-1" href="" onClick={this.contactMenuClick}>Contact</a>
        </nav>
        <PageSelect name={this.state.page}/>
      </div>


*/