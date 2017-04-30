import React, {Component} from 'react';
import {Link } from 'react-router';
import BlogList from './BlogList';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>TBB BlOG</h1>
                <Link to="/writeBlog"><button>写博客</button></Link>
                <Link to="/login"><button>登录</button></Link>
                <Link to="/signUp"><button>注册</button></Link>
                <BlogList />
            </div>
        )
    }
}

export default Header;