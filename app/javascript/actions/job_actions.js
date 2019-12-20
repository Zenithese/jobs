import * as APIUtil from '../utils/job_api_util';

export const RECEIVE_ALL_JOBS = "RECEIVE_ALL_JOBS"
export const RECEIVE_JOB = "RECEIVE_JOB"

const receiveAllJobs = (jobs) => {
    return {
        type: RECEIVE_ALL_JOBS,
        jobs,
    }
}

const receiveJob = (job) => {
    return {
        type: RECEIVE_JOB,
        jobs,
    }
}

export const fetchJobs = () => dispatch => {
    return APIUtil.fetchJobs().then(jobs => dispatch(receiveAllJobs(jobs)))
}

export const fetchJob = (job) => dispatch => {
    return APIUtil.fetchJob(job).then(job => dispatch(receiveJob(job)))
}