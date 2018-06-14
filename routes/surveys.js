const checkAuth = require('../middlewares/checkAuth');
const checkMinimumCredits = require('../middlewares/checkMinimumCredits');

module.exports = (app) => {
    app.post(
        '/api/surveys',
        checkAuth(),
        checkMinimumCredits(1),

        (req, res) => {
            
        }
    )
}