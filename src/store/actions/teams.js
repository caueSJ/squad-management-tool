import * as actionTypes from './actionTypes';

export const addTeam = team => {
    return {
        type: actionTypes.ADD_TEAM,
        team
    };
};

export const editTeam = team => {
    return {
        type: actionTypes.EDIT_TEAM,
        team
    };
};

export const deleteTeam = id => {
    return {
        type: actionTypes.DELETE_TEAM,
        id
    };
}; 