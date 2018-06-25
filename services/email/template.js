const config = require('config');
const baseDomain = config.get('BASE_DOMAIN');

module.exports = (body, surveyId) => 
`<html>
    <body style="text-align: center">
        <h1>Emaily survey question!</h1>
        <p>You have a new question from one of our users, please answer.</p>
        <p>${body}</p>
        <a href="${baseDomain}/api/surveys/${surveyId}/yes">Yes</a>
        <a href="${baseDomain}/api/surveys/${surveyId}/no">No</a>
    </body>
</html>`