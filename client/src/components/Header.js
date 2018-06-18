import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payment from './Payment';

class Header extends Component {
  renderContent() {
    switch (this.props.auth){
      case null: return;
      case false: return (<li><a href="/auth/google">Sign in with google</a></li>);
      default: {
        return [
          <li key="1"><Payment /></li>,
          <li key="2" style={{ margin: "0 20px"}}>Credits: {this.props.auth.credits}</li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ]
      }
    }
  }
  
  render() {    
    return (     
      <nav>
        <div className="nav-wrapper blue lighten-2">
          <Link to={this.props.auth ? "/dashboard" : "/"} className="brand-logo left" style={{padding: "0 20px"}}>Emaily</Link>
          <ul id="nav-mobile" className="right hide-on-small-and-down">
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