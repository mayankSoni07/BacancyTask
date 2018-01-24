/**
 * Action constants
 */
import * as Action from '../constants/actionConst';

/**
 * Actions Definition starts here
 */

 export const saveImage = (data) => {
    return ({
        type: Action.SAVE_IMAGE,
        payload: data
    })
}
