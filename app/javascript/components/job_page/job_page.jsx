import React from 'react';
import { connect } from 'react-redux';
import { fetchJobs, fetchJob } from '../../actions/job_actions'
import { saveJob } from '../../actions/saved_job_actions'


const mapStateToProps = (state, props) => {
    let job = state.entities.jobs[props.match.params.jobId]
    
    return {
        currentUser: state.entities.users[state.session.id],
        job,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchJobs: () => dispatch(fetchJobs()),
        fetchJob: (job) => dispatch(fetchJob(job)),
        saveJob: (job) => dispatch(saveJob(job)),
    };
};

class JobPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchJobs();
        this.props.fetchJob();
    }

    renderDuties() {
        return (
            <ul>
                {
                    this.props.job.duties.map((duty, i) => (
                        <li key={`duty-${i}`}>
                            <blockquote>{duty}</blockquote>
                        </li>
                    ))
                }
            </ul>

        )
    }

    renderQualifications(){
        return (
            <ul>
                {
                    this.props.job.qualifications.map( (qualifier, i) => (
                        <li key={`qualifier-${i}`}>
                            <blockquote>{qualifier}</blockquote>
                        </li>
                    ))
                }
            </ul>
            
        )
    }

    render() {
        console.log(this.props.job)
        if (this.props.job) {
            return (
                <div className="container">
                    {/* <h3>{this.props.job.title}</h3>
                    <p>{this.props.job.description}</p>
                    <div>{this.renderDuties()}</div>
                    <div>{this.renderQualifications()}</div>
                    <p>Local Union</p> */}

                    <div className="divider"></div>
                    <div className="section">
                        <h5>Description</h5>
                        <blockquote>{this.props.job.description}</blockquote>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Duties</h5>
                        {/* <blockquote>{this.renderDuties()}</blockquote> */}
                        {this.renderDuties()}
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Qualifications</h5>
                        {/* <blockquote>{this.renderQualifications()}</blockquote> */}
                        {this.renderQualifications()}
                    </div>
                </div>
            )
        } else {
            return (
                <div>Organizing...</div>
            ) 
        }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPage);