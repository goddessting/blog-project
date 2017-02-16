import React, {Component} from 'react';

const $ = require("jquery");
const port = require('../settings');


class DeleteBlog extends Component {
    submitHandler() {
        let flag = confirm("确定删除？");

        if (flag) {
            $.ajax({
                url: 'http://localhost:'+port.port+`/delete/${this.props._id}`,
                type: 'DELETE',
                async: true,
                success: function (data) {
                    alert(data);
                    if (data == "delete success") {
                        self.location = "/#/";
                    }
                }
            });
        } else {
            self.location = `/#/blog/${this.props._id}`;
        }
    }

    render() {
        return (
            <div>
                <button type="submit" onClick={this.submitHandler.bind(this)}>删除</button>
            </div>
        )
    }
}

export default DeleteBlog;