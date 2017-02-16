import React, {Component} from 'react';
import {Link} from 'react-router';

import DeleteBlog from './DeleteBlog';

const port = require('../settings');
const $ = require('jquery');

class BlogInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            writer: '',
            content: '',
            modifier: ''
        };
    }

    componentDidMount() {
        $.get('http://localhost:'+port.port+`/getBlog/${this.props.params.id}`, function (result) {
            this.setState({
                title: result[0].title,
                writer: result[0].writer,
                content: result[0].content,
                modifier: result[0].modifier
            });
        }.bind(this));
    }


    render() {
        let title = this.state.title;
        let writer = this.state.writer;
        let content = this.state.content;
        let modifier = this.state.modifier;

        return (
            <div>
                <Link to="/welcome">返回首页</Link>
                <Link to={`/editBlog/${this.props.params.id}`}>编辑</Link>
                <DeleteBlog _id={this.props.params.id}/>

                <div>标题：{title}</div>
                <div>作者：{writer} </div>
                <div><p>内容：{content}</p></div>
            </div>
    );
    }
    }

    export default BlogInfo;