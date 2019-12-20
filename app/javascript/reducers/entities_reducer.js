import { combineReducers } from 'redux';

import users from './users_reducer';
import jobs from './jobs_reducer';
import savedJobs from './saved_jobs_reducer'


export default combineReducers({
    users,
    jobs,
    savedJobs,
});