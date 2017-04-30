const mongoose = require('mongoose');
const UserSchema = require('../schema/User');

module.exports = mongoose.model('User', UserSchema);