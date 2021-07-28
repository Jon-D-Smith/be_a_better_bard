const initialState = {
    currentUser: null
}

const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {...state, currentUser = user};
        default:
            return state;
    }
}
