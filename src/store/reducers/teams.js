import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../util/utility';

const initialState = {
    teams: []
};

const addTeam = (state, action) => {
    return updateObject(state, {
        teams: [...state.teams, action.team]
    });
};

const deleteTeam = (state, action) => {
    return updateObject(state, {
        teams: state.teams.filter(team => team.id !== action.id)
    });
};

const editTeam = (state, action) => {
    const stateWithoutTeam = state.teams.filter(team => team.id !== action.id);
    return updateObject(stateWithoutTeam, {
        teams: [...stateWithoutTeam.teams, action.team]
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TEAM:
            return addTeam(state, action);
        case actionTypes.DELETE_TEAM:
            return deleteTeam(state, action);
        case actionTypes.EDIT_TEAM:
            return editTeam(state, action);
        default:
            return state;
    }
};

export default reducer;