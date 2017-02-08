import React, {Component} from 'react';
import BlogList from './BlogList';

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <BlogList />
            </div>
        )
    }
}

export default App;