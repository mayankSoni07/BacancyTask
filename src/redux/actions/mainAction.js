/**
 * Action constants
 */
import * as Action from '../constants/actionConst';

/**
 * Actions Definition starts here
 */

 export const saveData = (list) => {
    return ({
        type: Action.SAVE_DATA,
        payload: list
    })
}
