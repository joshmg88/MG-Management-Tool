import axios from 'axios'

const GET_JOBS = 'GET_JOBS'
const ADD_JOB = 'ADD_JOB'
const DELETE_JOB = 'DELETE_JOB'
const ASSIGNED_JOBS = 'ASSIGNED_JOBS'
const SELECT_EMPLOYEE = 'SELECT_EMPLOYEE'

export function getJobs() {
    return {
        type: 'GET_JOBS',
        payload: axios.get('/api/getJobs')
    }
}
export function addJob(newJob) {
    return {
        type: 'ADD_JOB',
        payload: axios.post('/api/addJob', newJob)
    }
}

export function deleteJob(job) {
    return {
        type: 'DELETE_JOB',
        payload: axios.delete(`/api/deleteJob/${job.job_id}`)
    }
}

export function assignedJobs(user) {
    return {
        type: 'ASSIGNED_JOBS',
        payload: axios.get(`/api/assignedJobs/${user}`)
    }
}

export function selectEmployee(userId, jobId) {
    return {

        type: 'SELECT_EMPLOYEE',
        payload: axios.put('/api/selectEmployee', { userId, jobId })
    }
}

const initialState = {
    jobs: [],
    didErr: false
}

export default function jobsReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_JOBS}_FULFILLED`:
        case `${ADD_JOB}_FULFILLED`:
        case `${DELETE_JOB}_FULFILLED`:
        case `${ASSIGNED_JOBS}_FULFILLED`:
        case `${SELECT_EMPLOYEE}_FULFILLED`:
            return {
                ...state,
                jobs: action.payload.data
            }
        case `${GET_JOBS}_REJECTED`:
        case `${ADD_JOB}_REJECTED`:
        case `${DELETE_JOB}_REJECTED`:
        case `${ASSIGNED_JOBS}_REJECTED`:
        case `${SELECT_EMPLOYEE}_REJECTED`:
            return {
                ...state,
                didErr: true
            }
        default:
            return state
    }
}