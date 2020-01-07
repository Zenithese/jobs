import React from 'react';
import { connect } from 'react-redux';
import { openEmail } from '../../actions/email_actions'
import { fetchJobs, fetchJob } from '../../actions/job_actions'
// import { saveJob } from '../../actions/saved_job_actions'


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
        // fetchJob: (job) => dispatch(fetchJob(job)),
        // saveJob: (job) => dispatch(saveJob(job)),
        openEmail: (recruiterEmail) => dispatch(openEmail(recruiterEmail)),
    };
};

class JobPage extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount() {
        this.props.fetchJobs();
        // this.props.fetchJob();
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
        
        if (this.props.job) {
            return (
                <div className="container">
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Description</h5>
                        <blockquote>{this.props.job.description}</blockquote>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Duties</h5>
                        {this.renderDuties()}
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <h5>Qualifications</h5>
                        {this.renderQualifications()}
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <h5 className="blue-text" style={{ cursor: 'pointer' }} onClick={() => this.props.openEmail(this.props.job.email)}>Contact</h5>
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