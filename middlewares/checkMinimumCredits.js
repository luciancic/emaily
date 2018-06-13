module.exports = (minCredits) => (req, res, next) => {
    if (req.user.credits < minCredits) {
        res.status(401).json({ error: 'Insufficient credits to perform this operation.'});
    }
    next();
}