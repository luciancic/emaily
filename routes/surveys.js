const mongoose = require('mongoose');
const checkAuth = require('../middlewares/checkAuth');
const checkMinimumCredits = require('../middlewares/checkMinimumCredits');
const sendEmail = require('../services/email');

const Survey = mongoose.model('Survey');

module.exports = (app) => {
    app.post(
        '/api/surveys',
        checkAuth(),
        checkMinimumCredits(1),

        (req, res) => {
            const { title, subject, question, recipients } = req.body;
            recipients = recipients.split(',').map(email => ({ email: email.trim() }))

            const survey = new Survey({
                title,
                subject,
                question,
                recipients,
                _user: req.user.id,
                createdOn: Date.now()
            });

            sendEmail(subject, question, recipients)
            .then(() => survey.save())
            .then((savedSurvey) => res.json(savedSurvey));
        }
    );
}