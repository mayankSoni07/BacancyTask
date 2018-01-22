/**
 * It is the Root reducer where all the reducers combined and exported.
 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import mainReducer from './MainReducer';

const rootReducer = combineReducers({
    main: mainReducer,
    form: formReducer
});

export default rootReducer;