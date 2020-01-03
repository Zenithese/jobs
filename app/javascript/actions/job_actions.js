import * as APIUtil from '../utils/job_api_util';

export const RECEIVE_JOBS = "RECEIVE_JOBS"
export const RECEIVE_JOB = "RECEIVE_JOB"

const receiveAllJobs = (jobs) => {
    return {
        type: RECEIVE_JOBS,
        jobs,
    }
}

const receiveJob = (job) => {
    return {
        type: RECEIVE_JOB,
        jobs,
    }
}

export const fetchJobs = (filters) => dispatch => {
    return APIUtil.fetchJobs(filters).then(jobs => dispatch(receiveAllJobs(jobs)));
};

export const fetchJob = (job) => dispatch => {
    return APIUtil.fetchJob(job).then(job => dispatch(receiveJob(job)));
};