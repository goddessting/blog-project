import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';
import Header from './Header';
import WriteBlog from './WriteBlog';
import BlogInfo from './BlogInfo';

const router = <Router history={hashHistory}>
    <Route path='/' component={App}>
        <IndexRoute component={Header} />
        <Route path='welcome' component={Header} />
        <Route path='writeBlog' component={WriteBlog} />
        <Route path='blog/:id' component={BlogInfo} />
    </Route>
</Router>;

ReactDOM.render(router, document.getElementById('app'));
