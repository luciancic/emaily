import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth){
      case null: return;
      case false: return (<li><a href="/auth/google">Sign in with google</a></li>);
      default: return (<li><a href="/api/logout">Logout</a></li>);
    }
  }
  
  render() {    
    return (     
      <nav>
        <div className="nav-wrapper blue lighten-2">
          <Link 
            to={this.props.auth ? "/dashboard" : "/"} 
            className="brand-logo" 
            style={{padding: "0 20px"}} 
          >Emaily</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);