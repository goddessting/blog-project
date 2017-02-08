const Blog = require('./entity/Blog');

exports.insertBlog = function (req, res) {
    let blog = new Blog({
        writer: req.body.title,
        title: req.body.writer,
        content: req.body.content,
        motifyWriter: req.body.motifyWriter
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