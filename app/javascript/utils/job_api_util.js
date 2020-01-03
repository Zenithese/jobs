var $ = require('jquery');

export const fetchJobs = data => {
    return $.ajax({
        method: 'GET',
        url: '/api/jobs',
        data: { data }
    })
};

export const fetchJob = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/jobs/${id}`
    })
};