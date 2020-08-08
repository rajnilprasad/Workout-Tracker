const path = require('path')
const app = require("express").Router();
app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});
app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});
module.exports = app;
// require('./routes/routes.js')(app);
// HTML routes needed


