import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import NewSurveyField from './NewSurveyField';
import fields from './_fields';
import validation from './_validation';
const validate = validation(fields);

class SurveyForm extends Component {
    renderFields() {
        return (
            fields.map(field => (<Field type="text" component={NewSurveyField} key={field.name} {...field}/>)) 
        )
    }

    render() {
        const handleSubmit = this.props.handleSubmit(values => console.log(values));

        return (
        <form onSubmit={handleSubmit}>
            <h3>New Survey</h3>
            {this.renderFields()}
            <Link to="/dashboard" className="btn red left" >Cancel</Link>
            <button type="submit" className="btn green right">Next</button>
        </form>
        )
    }
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);