import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {
  render() {
    return (
      <div className="center-align">
        <h1>Emaily</h1>
        <p>The easiest way to collect user feedback!</p>
        { this.props.auth ? <Redirect to="/dashboard" /> : null }
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Landing);