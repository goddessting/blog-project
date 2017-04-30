import React, {Component} from 'react';
const $ = require('jquery');
const port = require('../settings');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitButtonEnabled: false
        }
    }

    _onUsernameChanged(event) {
        const username = event.target.value;
        this.setState({
            username: username,
        });
    }

    submitHandler(){
        // let username = this.refs.username.value.trim();
        // let password = this.refs.password.value.trim();

        $.ajax({
            url: 'http://localhost:'+port.port+'/login',
            type: 'POST',
            async: true,
            data: {username, password},
            success: function (data) {
                alert(data);
                if (data == 'login success') {
                    self.location = "/#/welcome";
                }
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <div><input placeholder="用户名" ref="username" onChange={this._onPasswordChange.bind(this)}/></div>
                    <div><input　placeholder="密码"　ref="password" type="password"/></div>
                    <button　type="submit">登录</button>
                </form>
            </div>
        )
    }
}

export default Login;