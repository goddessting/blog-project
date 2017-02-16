var Blog = require('./entity/Blog');
const db = require('./connection');

exports.insertBlog = function (req, res) {
    let blog = new Blog({
        title: req.body.title,
        writer: req.body.writer,
        content: req.body.content,
        modifier: ''
    });

    blog.save();
    res.status(200).json("save success");
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
    console.log("==="+req.params.id);

    Blog.findById({_id: req.params.id}, function (err, blog) {
        if (err) return res.status(500).json({error: err.message});

        blog.remove(function (err) {
            if (err) return res.status(500).json({error: err.message});
            res.status(200).json("delete success");
        });
    });
};