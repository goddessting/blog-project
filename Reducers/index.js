import {combineReducers} from 'redux';
import addReducer from './add-reducer';
import deleteReducer from './delete-reducer';

export default combineReducers({addReducer, deleteReducer});

