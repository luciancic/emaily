// Container for the form and review form.
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class NewSurvey extends Component {
  render() {
    return (
      <div className="container">
        <SurveyForm />
      </div>
    )
  }
}

export default NewSurvey;