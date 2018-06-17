import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';

const FIELDS = [
    { name: "title", label: "Title"},
    { name: "subject", label: "Subject Line"},
    { name: "question", label: "Survey Question"},
    { name: "recipients", label: "Recipient List (comma separated please)"}
];

class SurveyForm extends Component {
    renderFields() {
        return (
            FIELDS.map(field => (<Field type="text" component={SurveyField} key={field.name} {...field}/>)) 
        )
    }

    render() {
        const handleSubmit = this.props.handleSubmit(values => console.log(values));

        return (
        <form onSubmit={handleSubmit}>
            {this.renderFields()}
            <Link to="/dashboard" className="btn red left" >Cancel</Link>
            <button type="submit" className="btn green right">Next</button>
        </form>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);