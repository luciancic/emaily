module.exports = (app) => {
    require('./auth')(app);
    require('./billing')(app);
}