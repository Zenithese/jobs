var $ = require('jquery');

export const fetchJobs = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/jobs',
    })
};

export const fetchJob = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/jobs/${id}`
    })
};