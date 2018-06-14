module.exports = (minCredits) => (req, res, next) => {
    if (req.user.credits < minCredits) {
        res.status(403).json({ error: 'Insufficient credits to perform this operation.'});
    }
    next();
}