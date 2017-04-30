const Blog = require('../model/blog');
const User = require('../model/user');
const db = require('./../connection');

exports.insertBlog = function (req, res) {
    let blog = new Blog({
        title: req.body.title,
        writer: req.body.writer,
        content: req.body.content,
        modifier: ''
    });

    blog.save(function (err) {
        if (err) {
            return res.json({tip: err.message});
        } else {
            return res.json({tip: "save success"});
        }
    });
};

exports.getBlogs = function (req, res) {
    Blog.find().sort({'createdAt': -1}).exec(function (err, blogs) {
        if (err) return res.status(500).json({error: err.message});
        res.send(blogs)
    });
};

exports.getBlog = function (req, res) {
    let id = req.params.id;
    Blog.find({_id: id}).exec(function (err, blog) {
        if (err) return res.status(500).json({error: err.message});
        res.send(blog)
    });
};

exports.modifyBlog = function (req, res) {
    let id = req.body.id;
    let title = req.body.title;
    let writer = req.body.writer;
    let content = req.body.content;
    let modifier = req.body.modifier;

    Blog.findById({_id: id}, function (err, blog) {
        if (err) return res.status(500).json({error: err.message});

        blog.title = title;
        blog.writer = writer;
        blog.content = content;
        blog.modifier = modifier;

        blog.save(function (err) {
            if (err) return res.status(500).json({error: err.message});
            res.status(200).json("update success");
        });
    });
};

exports.deleteBlog = function (req, res) {
    Blog.findById({_id: req.params.id}, function (err, blog) {
        if (err) return res.status(500).json({error: err.message});

        blog.remove(function (err) {
            if (err) return res.status(500).json({error: err.message});
            res.status(200).json("delete success");
        });
    });
};

exports.login = function (req, res) {
    User.find({username: req.body.username}).exec(function (err, user) {
        if (err) return res.status(500).json({error: err.message});
        if (user) {
            if (user[0].password === req.body.password) {
                res.status(200).json("login success");
            } else {
                res.status(400).json("password false");
            }
        }
        // res.send('该用户不存在');
    });
};