import React, {Component} from 'react';
const $ = require('jquery');
const port = require('../settings');

class Logup extends Component {
    submitHandler(){
        let username = this.refs.username.value.trim();
        let password = this.refs.password.value.trim();

        $.ajax({
            url: 'http://localhost:'+port.port+'/logup',
            type: 'POST',
            async: false,
            data: {username, password},
            success: function (data) {
                if (data == 'save success') {
                    alert(data);
                    self.location = "/#/welcome";
                }
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <div><input placeholder="用户名" ref="username"/></div>
                    <div><input　placeholder="密码"　ref="password" type="password"/></div>
                    <button　type="submit">注册</button>
                </form>
            </div>
        )
    }
}

export default Logup;