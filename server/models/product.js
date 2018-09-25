
const mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({

    name: {type: String, required: [true, "Name is required"], minlength: [3, "name must be 3 characters or longer."]},
    qty: {type: Number },
    price: {type: Number},
    },{timestamps:true});







mongoose.model('Product', ProductSchema);


