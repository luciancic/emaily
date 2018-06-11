import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component { 
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render(){
    return (
      <Router>
        <div id="app">
          <Header />
          
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    )
  }

}
export default connect(null, actions)(App);
