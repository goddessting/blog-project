import React, {Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class WriteBlog extends Component {
    submitHandler() {
        let title = this.refs.title.value.trim();
        let writer = this.refs.writer.value.trim();
        let content = this.refs.content.value.trim();

        $.ajax({
            url: 'http://localhost:3000/publish',
            type: 'POST',
            async: true,
            data: {title, writer, content},
            success: function (data) {
                if (data) {
                    self.location = "/#/";
                }
            }
        })
    }

    render() {
        return (
            <div>
                <Link to="/welcome">返回首页</Link>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <div>标题：<input placeholder="标题" ref="title"/></div>
                    <div>作者：<input placeholder="作者" ref="writer"/></div>
                    <div><p>内容：</p>
                        <textarea rows="30" cols="100" placeholder="内容" ref="content"></textarea>
                    </div>
                    <button type="submit">发布</button>
                </form>
            </div>
        )
    }
}


export default WriteBlog;