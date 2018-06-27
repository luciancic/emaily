import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import SurveyPromoter from './SurveyPromoter';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    render() {
        const { surveys } = this.props;

        if ( surveys.fetched && surveys.length === 0) return (
            <SurveyPromoter />
        );

        return surveys.reverse().map(survey => (
        <div className="card red lighten-4" key={survey._id} style={{ marginTop: "35px" }}>
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