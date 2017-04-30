const mongoose = require('mongoose');
const BlogSchema = require('../schema/Blog');

module.exports = mongoose.model('Blog', BlogSchema);