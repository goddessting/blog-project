const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./db/connection');
const execute = require('./db/execute');

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

app.listen(3000, function () {
    console.log('Express server is listening on port 3000');
});
