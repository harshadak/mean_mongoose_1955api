var persons = require('../controllers/persons.js');

module.exports = function(app) {

    // Root route to show all the people
    app.get('/', function(req, res) {
        persons.showAll(req, res);
    })

    // Route to add a new person
    app.get('/new/:name', function(req, res) {
        persons.newPerson(req, res);
    })

    // Route to get one person info
    app.get('/:name', function(req, res) {
        persons.showOnePerson(req, res);
    })

    // Route to remove a person
    app.get('/remove/:name/', function(req, res) {
        persons.deletePerson(req, res);
    })
}