import React from 'react';
import { connect } from 'react-redux';
import fields from './_fields';
import * as actions from '../../actions';

const NewSurveyReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFields = fields.map(({ label, name }, index) => (
        <div key={index}>
            <label>{label}</label>
            <p>{ formValues[name] }</p>
        </div>
    ));
    
    return (
        <div>
            <h4>Please review your entries</h4>
            { reviewFields }
            <button className="btn red left" onClick={onCancel}>Back</button>
            <button className="btn green right" onClick={() => submitSurvey(formValues)}>
                Save and Send
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
};

const mapStateToProps = (state) => ({ formValues: state.form.surveyForm.values });

export default connect(mapStateToProps, actions)(NewSurveyReview);