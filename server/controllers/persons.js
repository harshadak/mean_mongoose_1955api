var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {

    // Function to show all people
    showAll: function(req, res) {
        Person.find({}, function(err, persons) {
            if(err) {
                console.log("Something went wrong", err);
            } else {
                console.log("All the people******************** ", persons);
                res.json(persons);
            }
        })
    },
    
    // Function to add a new person
    newPerson: function(req, res) {
        var person = new Person({name: req.params.name});
        console.log(person);

        person.save(function(err) {
            if(err) {
                console.log('Something went wrong');
            } else {
                console.log("Successfully added a person");
                res.redirect('/');
            }
        })
    },

    // Function to get one person info
    showOnePerson: function(req, res) {
        Person.findOne({name: req.params.name}, function(err, person) {
            if(err) {
                console.log("Something went wrong");
            } else {
                res.json(person);
            }
        })
    },

    // Function to remove a person
    deletePerson: function(req, res) {
        Person.remove({name: req.params.name}, function(err, result) {
            if(err) {
                console.log('something went wrong', err);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully deleted an animal!', Person.name);
                res.redirect('/');
            }
        })
    }
}