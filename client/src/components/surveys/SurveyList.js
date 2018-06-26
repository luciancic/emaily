import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }
    
    renderSurveyList() {
        
    }

    render() {
        return this.props.surveys.reverse().map(survey => (
        <div className="card red lighten-4" key={survey._id}>
            <div className="card-content">
                <span className="card-title">{survey.title}</span>
                <p>{survey.question}</p>
                <p className="right">Sent on: {new Date(survey.createdOn).toLocaleDateString()}</p>
            </div>
            <div className="card-action">
                <a className="black-text">Yes: {survey.yes}</a>
                <a className="black-text">No: {survey.no}</a>
            </div>
        </div>))
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);