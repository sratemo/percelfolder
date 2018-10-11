const mongoose = require('mongoose');

const { Schema } = mongoose;


const providerSchema = new Schema({
  businessName: {type: String, required: true},
  description:{type: String, required: true},
  email: {type: String, required: true},
  address: {type: String, required: true},
  userName: {type: String, required: true},
  password: {type: String, required: true},
  reviews: {type: Array, required: false},
});

module.exports = mongoose.model('Provider', providerSchema);
