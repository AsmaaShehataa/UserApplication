import useresConstants from './usersConstants'

const startupUsers = []

const usersReducer = (state = startupUsers, {type, payload}) =>{
    switch(type){
        case useresConstants.INITE_USER:
            return payload;
        case useresConstants.ADD_USER:
            return [...state, payload]
        case useresConstants.UPDATE_USER:
            return; 
        case useresConstants.DELETE_USER:
            return;
        default:
            return state;

    }
}

export default usersReducer;