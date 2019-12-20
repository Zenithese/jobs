import * as APIUtil from '../utils/saved_job_util';

export const RECEIVE_ALL_SAVEDJOBS = "RECEIVE_ALL_SAVEDJOBS"
export const RECEIVE_SAVEDJOB = "RECEIVE_SAVEDJOB"
export const REMOVE_SAVEDJOB = "REMOVE_SAVEDJOB"

export const receieveAllSavedJobs = (jobs) => {
    
    return {
        type: RECEIVE_ALL_SAVEDJOBS,
        jobs,
    }

}

export const receiveSavedJob = (job) => {
    
    return {
        type: RECEIVE_SAVEDJOB,
        job,
    }

}

export const removeSavedJob = (job) => {
    
    return {
        type: REMOVE_SAVEDJOB,
        job,
    }

}

export const fetchSavedJobs = () => dispatch => (
    APIUtil.fetchSavedJobs().then(SavedJobs => (
        dispatch(receieveAllSavedJobs(SavedJobs))
    ))
);

export const saveJob = (job) => dispatch => {
    
    return APIUtil.saveJob(job).then(job => (
        dispatch(receiveSavedJob(job))
    ))
};

export const deleteSavedJob = (jobId) => dispatch => {
    
    return APIUtil.deleteSavedJob(jobId).then(jobId => (
        dispatch(removeSavedJob(jobId))
    ))
};