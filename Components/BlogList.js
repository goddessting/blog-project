import React, {Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        $.get('http://localhost:3000/getBlogs', function (result) {
            this.setState({
                blogs: result
            });
        }.bind(this));
    }

    render() {
        const blogsRows = this.state.blogs.map(blog =>
            <div>
                <Link to="/blogs/{blog.id}">
                    <p><span><h2>{blog.title}</h2>作者：{blog.writer} 发布时间：{blog.createdAt}</span></p>
                    <p>{blog.content}</p>
                    <hr/>
                </Link>
            </div>
        );

        return (
            <div>
                {blogsRows}
            </div>
        );
    }
}

export default BlogList;