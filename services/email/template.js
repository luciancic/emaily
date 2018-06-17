const config = require('config');
const redirect = config.get('REDIRECT_DOMAIN');

module.exports = (body) => 
`<html>
    <body>
        <h1>Emaily survey question!</h1>
        <p>You have a new question from one of our users, please answer.</p>
        <p>${body}</p>
        <a href="${redirect}">Yes</a>
        <a href="${redirect}">No</a>
    </body>
</html>`