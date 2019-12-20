import merge from 'lodash/merge';

import { RECEIVE_ALL_SAVEDJOBS, RECEIVE_SAVEDJOB, REMOVE_SAVEDJOB } from '../actions/saved_job_actions';

const savedJobsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ALL_SAVEDJOBS:
            return action.jobs
        case RECEIVE_SAVEDJOB: {
            return merge({}, state, { [action.job.id]: action.job })
        }
        case REMOVE_SAVEDJOB: {
            const newSavedJobs = merge({}, state)
            delete newSavedJobs[action.job.id]
            return newSavedJobs
        }
        default:
            return state;
    }
};

export default savedJobsReducer;