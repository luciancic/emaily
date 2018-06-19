// Container for the form and review form.
import React, { Component } from 'react';
import NewSurveyForm from './NewSurveyForm';
import NewSurveyReview from './NewSurveyReview';

class NewSurvey extends Component {
  state = { showReview: false };
  
  renderContent() {
    return this.state.showReview ? 
      <NewSurveyReview onCancel={() => this.setState({ showReview: false })} /> : 
      <NewSurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
  }

  render() {
    return (
      <div className="container">
        { this.renderContent() }
      </div>
    )
  }
}

export default NewSurvey;