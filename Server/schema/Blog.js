var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        writer: {type: String, unique: true, required: true},
        content: {type: String, required: true},
        modifier: {type: String}
    },
    {timestamps: true}
);

module.exports = BlogSchema;