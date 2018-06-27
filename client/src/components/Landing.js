import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {
  render() {
    return <div className="card purple lighten-4" style={{ marginTop: "40px" }}>
        <div className="card-content">
            <span className="card-title">Emaily</span>
            <p>A great way to get user feedback through email!</p>
        </div>
        <div className="card-action">
          <a href="/auth/google" className="btn blue">Sign in with google</a>
        </div>
        { this.props.auth ? <Redirect to="/dashboard" /> : null }
    </div>
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Landing);