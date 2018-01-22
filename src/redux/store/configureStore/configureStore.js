/**
 * => Create and export Redux Store here.
 */

import { createStore, applyMiddleware, compose } from 'redux';
/**
 * Used to manage logs.
 */
import { createLogger } from 'redux-logger';
import rootReducer from '../../reducers';
/**
 * Redux middileware, Used for Async actions.
 */
import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const createRNReduxStore = applyMiddleware(ReduxThunk)(createStore);
const store = createRNReduxStore(rootReducer);

export default store;





