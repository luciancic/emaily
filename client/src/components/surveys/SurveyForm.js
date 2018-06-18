import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import fields from './fields';
import validation from './validation';
const validate = validation(fields);

class SurveyForm extends Component {
    renderFields() {
        return (
            fields.map(field => (<Field type="text" component={SurveyField} key={field.name} {...field}/>)) 
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