import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import { fetchSavedJobs, deleteSavedJob } from '../../actions/saved_job_actions'
import { fetchJobs } from '../../actions/job_actions'

const mapStateToProps = (state) => {
    let currentUser = state.entities.users[state.session.id]
    let savedJobs = Object.values(state.entities.savedJobs).filter(job => job.user_id === currentUser.id).map(job => job.job_id)
    let jobs = Object.values(state.entities.jobs).filter(job => savedJobs.includes(job.id))
    return {
        currentUser,
        jobs,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSavedJobs: () => dispatch(fetchSavedJobs()),
        fetchJobs: () => dispatch(fetchJobs()),
        deleteSavedJob: (jobId) => dispatch(deleteSavedJob(jobId)),
    }
}

function SavedJobs(props) {
    const [ change, setChange ] = useState(false);

    const removeJob = (job) => {
        props.deleteSavedJob(job);
        setChange(!change);
    }

    const renderSavedJob = savedJobs => {
        return (
            <ul>
                {savedJobs.map((job, i) => (
                    <li className="col s3" key={`job-${i}`}>
                        <div className="card hovorable">
                            <div className="card-image">
                                <img className="" src={require("/Users/justin/Desktop/projects/jobs/jobs/app/assets/images/comp_vii.jpg")} />
                                <button className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => removeJob(job.id)}><i className="material-icons">remove</i></button>
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
                ))}
            </ul>
        )
    }

    useEffect(() => {
        props.fetchSavedJobs();
    }, [change]);

    useEffect(() => {
        props.fetchJobs();
    }, []);

    return (
        <div>
            <div className="row">{renderSavedJob(props.jobs)}</div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedJobs);