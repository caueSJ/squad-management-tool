import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    players: []
};

const addPlayer = (state, action) => {
    const player = updateObject(action.player, {
        id: state.players.length + 1
    });
    return updateObject(state, {
        players: [...state.players, player]
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PLAYER:
            return addPlayer(state, action);
        default:
            return state;
    }
};

export default reducer;