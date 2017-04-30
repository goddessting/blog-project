import {Router, Route, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';

import reducer from '../Reducers/index';
import App from './App';
import Header from './Header';
import WriteBlog from './WriteBlog';
import EditBlog from './EditBlog';
import InfoBlog from './InfoBlog';
import Login from './Login';
import SignUp from './SignUp';
import {Provider} from 'react-redux';
import writeBlogMiddleware from '../middlewares/writeBlogMiddleware';

const createMiddlewareStore = applyMiddleware(writeBlogMiddleware)(createStore);
const store = createMiddlewareStore(reducer);

const router =
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Header}>
                {/*<IndexRoute component={Header}/>*/}
                <Route path='welcome' component={Header}/>
                <Route path='writeBlog' component={WriteBlog}/>
                <Route path='blog/:id' component={InfoBlog}/>
                <Route path='editBlog/:id' component={EditBlog}/>
                <Route path='login' component={Login}/>
                <Route path='signUp' component={SignUp}/>
            </Route>
        </Router>
    </Provider>;

ReactDOM.render(router, document.getElementById('app'));
