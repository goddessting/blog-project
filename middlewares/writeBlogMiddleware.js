import request from 'superagent';

const writeBlogMiddleware = store => next => action=> {
    switch (action.type) {
        case 'LOAD_WRITE_BLOG':
            request.post(`/publish`)
                .send(action.blogInfo)
                .end((err, res)=> {
                    if (!err) {
                        next({
                            type: 'WRITE_BLOG',
                            tip: res.body
                        });
                    }
                });
        break;
    }
    next(action);
};

export default writeBlogMiddleware;