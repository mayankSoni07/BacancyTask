/**
 * Import Action constants.
 */
import * as Action from '../constants/actionConst';

/**
 * Define Initial state for reducer.
 */
const INITIAL_STATE = {
    image: {}
};

/**
 * Export reducer
 * It takes previous state, action and returns new state.
 */
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Action.SAVE_IMAGE:
            return { ...state, image: action.payload};
            
        default:
            return state;
    }
}