const config = require('config');
const stripe = require('stripe')(config.get('STRIPE.SECRET_KEY'));

module.exports = app => {
  app.post('/api/payment', async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'cad',
      description: '5$ for 5 credits.',
      source: req.body.id,
    });
    res.json(req.user);
  })
}