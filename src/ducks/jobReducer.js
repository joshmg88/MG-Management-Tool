import axios from 'axios'

const GET_JOBS = 'GET_JOBS'
const ADD_JOB = 'ADD_JOB'
const DELETE_JOB = 'DELETE_JOB'
const ASSIGNED_JOBS = 'ASSIGNED_JOBS'

export function getJobs() {
    return {
        type: 'GET_JOBS',
        payload: axios.get('/api/getJobs')
    }
}
export function addJob(newJob) {
    // console.log(newJob)
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

export function assignedJobs() {
    return {
        type: 'ASSIGNED_JOBS',
        payload: axios.get('/api/assignedJobs')
    }
}

const initialState = {
    jobs: [],
    didErr: false
}

export default function jobsReducer(state = initialState, action) {
    // console.log(action.type);
    switch (action.type) {
        case `${GET_JOBS}_FULFILLED`:
        case `${ADD_JOB}_FULFILLED`:
        case `${DELETE_JOB}_FULFILLED`:
        case `${ASSIGNED_JOBS}_FULFILLED`:
            return {
                ...state,
                jobs: action.payload.data
            }
        case `${GET_JOBS}_REJECTED`:
        case `${ADD_JOB}_REJECTED`:
        case `${DELETE_JOB}_REJECTED`:
        case `${ASSIGNED_JOBS}_REJECTED`:
            return {
                ...state,
                didErr: true
            }
        default:
            return state
    }
}