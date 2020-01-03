import { RECEIVE_JOBS, RECEIVE_JOB } from '../actions/job_actions';

const jobsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_JOBS:
            return action.jobs
        case RECEIVE_JOB:
            return Object.assign([], state, { [action.job.id]: action.job });
        default:
            return state;
    }
};

export default jobsReducer;