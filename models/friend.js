var mongoose = require('mongoose');

var friendSchema = new mongoose.Schema({
    name: {type: String, required: true}
});

module.exports = mongoose.model('Friend', friendSchema);