import axios from 'axios';

const GET_USER = 'GET_USER';
const UPDATE_ROLE = 'UPDATE_ROLE'

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/api/me')
    };
}

export function updateRole(role, id) {
    console.log(role, id)
    return {
        type: UPDATE_ROLE,
        payload: axios.put('/api/updateRole', { role, id })
    }
}

const initialState = {
    user: {},
    didErr: false
};

export default function userReducer(state = initialState, action) {
    // console.log(action.payload)
    switch (action.type) {
        case `${GET_USER}_FULFILLED`:
            return {
                ...state,
                user: action.payload.data
            };
        case `${UPDATE_ROLE}_FULFILLED`:
            return {
                ...state,
                user: action.payload.data[0]
            };
        case `${GET_USER}_REJECTED`:
        case `${UPDATE_ROLE}_REJECTED`:
            return {
                ...state,
                didErr: true
            };
        default:
            return state;
    }
}
