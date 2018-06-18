export default (fields) => (values) => {
    const errors = {};

    fields.forEach(({ name }) => {
        errors[name] = values[name] ? undefined : 'This field is required';
    });

    return errors;
}

 