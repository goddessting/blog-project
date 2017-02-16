var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        title: {type: String, required: true},
        writer: {type: String, unique: true, required: true},
        content: {type: String, required: true},
        modifier: {type: String}
    },
    {timestamps: true}
);

module.exports = mongoose.model('Blog', UserSchema);