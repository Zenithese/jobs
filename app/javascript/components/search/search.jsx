import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { fetchJobs } from '../../actions/job_actions';
import { saveJob } from '../../actions/saved_job_actions';

const msp = state => {
    return {
        jobs: Object.values(state.entities.jobs),
    };
};

const mdp = dispatch => {
    return {
        fetchJobs: (input) => dispatch(fetchJobs(input)),
        saveJob: (job) => dispatch(saveJob(job)),
    };
};

function Search(props) {

    function handleSubmit(job) {
        props.saveJob(job)
    }

    function handleChange(input) {
        props.fetchJobs(input.toLowerCase().replace(/\s+/g,' ').trim().split(' '))
    }

    function renderJobs(jobs) {
        return (
            <ul>
                {
                    jobs.map((job, i) => (
                        <li className="col s3" key={`job-${i}`}>
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img className="" src={'https://seedie.s3.amazonaws.com/comp_vii.jpg'} />
                                    <button className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => handleSubmit(job)}><i className="material-icons">add</i></button>
                                </div>
                                <div className="card-content">
                                    <span className="card-title grey-text text-darken-4"><NavLink to={`/jobs/${job.id}`}>{job.title}</NavLink></span>
                                    <p className="activator truncate">{job.description}</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                                    <p>{job.description}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        );
    }

    return (
        <div>
            <input type="search" onChange={(e) => handleChange(e.target.value)}/>
            <button>Search</button>
            <div className="row">{renderJobs(props.jobs)}</div>
        </div>
    )
}

export default connect(msp, mdp)(Search);