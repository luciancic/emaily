import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (     
      <nav>
        <div className="nav-wrapper blue lighten-2">
          <Link to="/" class="brand-logo" style={{marginLeft: "20px"}} >Emaily</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/auth/google">Sign in with google</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;