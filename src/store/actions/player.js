import * as actionTypes from './actionTypes';

export const addPlayer = player => {
    return {
        type: actionTypes.ADD_PLAYER,
        player
    };
};