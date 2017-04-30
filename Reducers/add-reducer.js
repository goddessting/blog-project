function add(state = {tip: ''}, action) {
    switch (action.type) {
        case 'WRITE_BLOG':
            state.tip = action.data;

            return assign({}, state);
    }

    return state;
}
export default add;
