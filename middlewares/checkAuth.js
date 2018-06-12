module.exports = () => (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ error: 'You need to be logged in to access this functionality.'});
  }
  next();
}