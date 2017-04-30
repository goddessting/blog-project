import {connect} from 'react';
import WriteBlog from '../Components/WriteBlog';

const mapStateToProps = (state) => {
    return {
        tip:state.addReducer.tip
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onWriteBlog: (blogInfo) => {
            dispatch({
                type: "LOAD_WRITE_BLOG",
                blogInfo
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteBlog);