var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        writer: { type: String, unique: true, required: true },
        title: { type: String, required: true },
        content:{type: String,required:true},
        motifyWriter: {type:String}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Blog', UserSchema);