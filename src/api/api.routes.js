

module.exports = function(app) {
    app.use('/api/owners/', require('./routes/owners.js'));
    app.use('/api/pets/', require('./routes/pets.js'));
    
}
