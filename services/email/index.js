module.exports = async (surveyId, subject, question, recipients) => {
  const config = require('config');
  const helpers = require('@sendgrid/helpers');
  const { Mail, Personalization } = helpers.classes;
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(config.get('SENDGRID_API_KEY'));
  
  const body = require('./template')(question, surveyId);

  const pers = new Personalization();
  recipients.forEach(email => pers.addTo(email));
  
  const mail = new Mail();
  mail.addPersonalization(pers);
  mail.setTrackingSettings({ clickTracking: { enable: true, enableText: true }});
  mail.setFrom({ email: 'no-reply@emaily.com', name: 'Emaily' });
  mail.setSubject(subject);
  mail.setContent([ { type: 'text/html', value: body } ]);

  await sgMail.send(mail);
}