const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (fields) => (values) => {
    const errors = {};
    

    // Validate emails
    const recipients = values.recipients || '';
    let invalidEmails = recipients
        .split(',')
        .map(email => email.trim())
        .filter(email => re.test(email) === false);
    
    if (invalidEmails.length) { errors.recipients = `The following emails are invalid: \n${invalidEmails.join('; \n')}` }
    // TODO: Ajust error message when there is a trailing comma or double comma


    // All fields are required
    fields.forEach(({ name }) => {
        if (!values[name]) { errors[name] = 'This field is required' }
    });

    return errors;
}
