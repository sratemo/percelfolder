const mongoose = require('mongoose');

const { Schema } = mongoose;


const basicUserSchema = new Schema({
  email: {type: String, required: true},
  userName: {type: String, required: true},
  password: {type: String, required: true},
});

module.exports = mongoose.model('BasicUser', basicUserSchema);
