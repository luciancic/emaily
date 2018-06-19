// Container for the form and review form.
import React, { Component } from 'react';
import NewSurveyForm from './NewSurveyForm';

class NewSurvey extends Component {
  render() {
    return (
      <div className="container">
        <NewSurveyForm />
      </div>
    )
  }
}

export default NewSurvey;