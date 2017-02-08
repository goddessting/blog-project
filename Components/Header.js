import React, {Component} from 'react';
import {Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>TBB BlOG</h1>
                <Link to="/writeBlog"><button>写博客</button></Link>
            </div>
        )
    }
}

export default Header;