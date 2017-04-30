const User = require('../model/user');
const db = require('./../connection');

exports.logup = function (req, res) {
    let user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function (err) {
        if (err) {
            return res.json({tip: err.message});
        } else {
            return res.json({tip: "save success"});
        }
    });
};