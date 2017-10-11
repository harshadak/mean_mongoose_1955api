var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema( {
    name: {type: String}
})

mongoose.model('Person', PersonSchema);