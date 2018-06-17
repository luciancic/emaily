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

        async (req, res) => {
            let { title, subject, question, recipients } = req.body;
            const { user } = req;

            // TODO: Before implementing front-end, rethink/refactor data structure of recipients
            recipients = recipients.split(',').map(email => ({ email: email.trim() }))

            const survey = new Survey({
                title,
                subject,
                question,
                recipients,
                _user: user.id,
                createdOn: Date.now()
            });

            try {    
                await sendEmail(subject, question, recipients)
                const savedSurvey = await survey.save();
                user.credits -= 1;
                await user.save();
                res.json(savedSurvey);
            } catch (err) { 
                res.status(422).send(err);
            }
        }
    );
}