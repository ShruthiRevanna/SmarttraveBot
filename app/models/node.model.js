const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    line: {type: String, required: true, max: 100},
    status: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);