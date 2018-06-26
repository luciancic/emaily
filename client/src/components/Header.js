import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payment from './Payment';
import M from 'materialize-css';

class Header extends Component {
  renderContent() {
    switch (this.props.auth){
      case null: return;
      case false: return (<li><a href="/auth/google">Sign in with google</a></li>);
      default: {
        return [
          <li key="1"><Payment /></li>,
          <li key="2"><a>Credits: {this.props.auth.credits}</a></li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ]
      }
    }
  }
  
  initDropdown() {
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { coverTrigger: false, constrainWidth: false });
  }

  render() {    
    return (     
      <nav>
        <style>
        </style>
        <div className="nav-wrapper blue lighten-2">
          <a className='dropdown-trigger right hide-on-med-and-up' data-target='nav-dropdown'>
            <i className="material-icons" style={{ marginRight: "20px" }}>menu</i>
          </a>
          <Link to={this.props.auth ? "/dashboard" : "/"} className="brand-logo left" style={{padding: "0 20px"}}>Emaily</Link>
          <ul id="nav-mobile" className="right hide-on-small-and-down">
            {this.renderContent()}
          </ul>
          <ul id='nav-dropdown' className='dropdown-content hide-on-med-and-up' >
            {this.renderContent()}
          </ul>
          {this.initDropdown()}
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);