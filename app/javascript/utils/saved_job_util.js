var $ = require('jquery');

export const fetchSavedJobs = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/saved_jobs',
    })
};

export const saveJob = (job) => {
    
    return $.ajax({
        method: 'POST',
        url: '/api/saved_jobs',
        data: { job }
    })
};

export const deleteSavedJob = (JobId) => {
    
    return $.ajax({
        method: 'DELETE',
        url: `/api/saved_jobs/${JobId}`
    })
};