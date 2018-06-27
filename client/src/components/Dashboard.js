import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import { connect } from 'react-redux';

const Dashboard = ({ auth }) => {
  return (
    <div>
      <SurveyList />
      { renderLink(auth) }
    </div>
  )
}

function renderLink(auth) {
  if (auth && auth.credits > 0) {
    return <div className="fixed-action-btn">
      <Link to="/surveys/new" className="btn-floating btn-large red">
        <i className="large material-icons">add</i>
      </Link>
    </div>
  }
}


function mapStateToProps({ auth }) { return { auth }}

export default connect(mapStateToProps)(Dashboard);