import React, {Component} from 'react';
import {Link} from 'react-router';

import DeleteBlog from './DeleteBlog';
const port = require('../settings');
const $ = require('jquery');

let id = '';
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
        id = this.props.params.id;

        $.get('http://localhost:' + port.port + `/getBlog/${id}`, function (result) {
            this.setState({
                title: result[0].title,
                writer: result[0].writer,
                content: result[0].content,
                modifier: result[0].modifier
            });
        }.bind(this));
    }

    handleChange_title(event) {
        this.setState({title: event.target.value});
    }

    handleChange_writer(event) {
        this.setState({writer: event.target.value});
    }

    handleChange_content(event) {
        this.setState({content: event.target.value});
    }

    handleChange_modifier(event) {
        this.setState({modifier: event.target.value})
    }

    submitHandler() {
        let title = this.state.title;
        let writer = this.state.writer;
        let content = this.state.content;
        let modifier = this.state.modifier;

        $.ajax({
            url: 'http://localhost:' + port.port + '/modify',
            type: 'PUT',
            async: true,
            data: {id, title, writer, content, modifier},
            success: function (data) {
                if (data == "update success") {
                    self.location = "/#/";
                }
            }
        })
    }

    render() {
        let title = this.state.title;
        let writer = this.state.writer;
        let content = this.state.content;
        let modifier = this.state.modifier;

        return (
            <div>
                <Link to="/welcome">返回首页</Link>

                <form onSubmit={this.submitHandler.bind(this)}>
                    <div>标题：<input type="text" value={title} ref="title" onChange={this.handleChange_title.bind(this)}/>
                    </div>
                    <div>作者：<input type="text" value={writer} ref="writer"
                                   onChange={this.handleChange_writer.bind(this)}/></div>
                    <div><p>内容：</p><textarea value={content} rows="30" cols="100" ref="content"
                                             onChange={this.handleChange_content.bind(this)}/></div>
                    <div>修改人：<input type="text" value={modifier} ref="modifier"
                                    onChange={this.handleChange_modifier.bind(this)}/></div>
                    <button type="submit">更新</button>
                </form>
            </div>
        );
    }
}

export default BlogInfo;