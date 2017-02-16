const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./db/connection');
const execute = require('./db/execute');
const port = require('../settings');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('./', {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['html', 'js', 'css'],
    index: ['index.html'], // or `false`
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
}));

app.post('/publish', execute.insertBlog);
app.get('/getBlogs', execute.getBlogs);
app.get('/getBlog/:id', execute.getBlog);
app.put('/modify', execute.modifyBlog);
app.delete('/delete/:id', execute.deleteBlog);

app.listen(port.port, function () {
    console.log('Express server is listening on port ' + port.port);
});
