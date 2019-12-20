import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchJobs } from '../../actions/job_actions'
import { saveJob } from '../../actions/saved_job_actions'

const mapStateToProps = (state) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        jobs: Object.values(state.entities.jobs),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchJobs: () => dispatch(fetchJobs()),
        saveJob: (job) => dispatch(saveJob(job)),
    };
};

class JobsBoard extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.fetchJobs();
    }

    handleSubmit(job) {
        // this.setState({ savedJobs: [...this.state.savedJobs, job]})
        
        this.props.saveJob(job)
    }

    renderJobs() {
        return (
            <ul>
                {
                    this.props.jobs.map((job, i) => (
                        <li className="col s3" key={`job-${i}`}>
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img className="" src={require("/Users/justin/Desktop/projects/jobs/jobs/app/assets/images/comp_vii.jpg")} />
                                    <button className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => this.handleSubmit(job)}><i className="material-icons">add</i></button>
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

    render() {
        return (
            <div>
                <h3 className="blue-text">Find a Union Job</h3>
                <div className="row">{this.renderJobs()}</div>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsBoard);