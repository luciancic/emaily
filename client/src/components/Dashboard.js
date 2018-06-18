import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  )
}