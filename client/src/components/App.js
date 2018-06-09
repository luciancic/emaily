import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';

const App = () => 
    <Router>
      <div id="app">
        <Header />
        
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>

export default App;
