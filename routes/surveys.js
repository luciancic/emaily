const mongoose = require('mongoose');
const checkAuth = require('../middlewares/checkAuth');
const checkMinimumCredits = require('../middlewares/checkMinimumCredits');
const sendEmail = require('../services/email');
const { URL } = require('url');
const Path = require('path-parser').default;
const _ = require('lodash');

const Survey = mongoose.model('Survey');

module.exports = (app) => {



    app.get('/api/surveys/:surveyId/:answer', (req, res) => {
        res.send('Thank you for answering our survey! You feedback has been recorded.');
    });







    app.post('/api/surveys/webhooks', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:answer');
        _.chain(req.body)
            .map(e => {
                if (e.event === 'click') {
                    const match = p.test(new URL(e.url).pathname);

                    if (match) return { 
                        email: e.email, 
                        surveyId: match.surveyId,
                        answer: match.answer
                    }
                }
            })
            .compact() // Removes undefined elements from array
            .uniqBy('email', 'surveyId')
            .each(({ surveyId, email, answer}) => {
                Survey.updateOne({ 
                    _id: surveyId, 
                    recipients: {
                        $elemMatch: { email, responded: false }
                    }
                }, {
                    $inc: { [answer]: 1 },
                    $set: { 'recipients.$.responded': true },
                    lastResponded: Date.now()
                }).exec();
            })
            .value();
        
        res.send({});
    });








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
                await sendEmail(survey.id, subject, question, recipients)
                await survey.save();
                user.credits -= 1;
                const savedUser = await user.save();
                res.json(savedUser);
            } catch (err) { 
                res.status(422).send(err);
            }
        }
    );
}