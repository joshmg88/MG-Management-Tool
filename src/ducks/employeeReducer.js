import axios from 'axios'

const GET_EMPLOYEES = 'GET_EMPLOYEES'
const ADD_EMPLOYEES = 'ADD_EMPLOYEES'
const DELETE_EMPLOYEES = 'DELETE_EMPLOYEES'

export function getEmployees() {
    return {
        type: GET_EMPLOYEES,
        payload: axios.get('/api/employees')
    }
}

export function addEmployees(employees) {
    return {
        type: ADD_EMPLOYEES,
        payload: axios.post('/api/employees', employees)
    }
}

export function deleteEmployee(employees) {
    return {
        type: DELETE_EMPLOYEES,
        payload: axios.delete(`/api/employees/${employees.id}`)
    }
}

const initialState = {
    employees: [],
    didErr: false
}

export default function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_EMPLOYEES}_FULFILLED`:
        case `${ADD_EMPLOYEES}_FULFILLED`:
        case `${DELETE_EMPLOYEES}_FULFILLED`:
            return {
                ...state,
                employees: action.payload.data
            };
        case `${GET_EMPLOYEES}_REJECTED`:
        case `${ADD_EMPLOYEES}_REJECTED`:
        case `${DELETE_EMPLOYEES}_REJECTED`:
            return {
                ...state,
                didErr: true
            }
        default:
            return state;
    }
}
