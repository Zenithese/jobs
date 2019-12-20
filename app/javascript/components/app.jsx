import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import { ProtectedRoute } from '../utils/route_util';
import SessionForm from '../components/session_form/session_form';

import JobsBoard from '../components/jobs_board/jobs_board'
import SavedJobs from './saved_jobs/saved_jabs';
import JobPage from './job_page/job_page';
import Splash from './splash/splash';
import Modal from '../components/session_form/modal'

const App = () => {
    return (
    <div>
        <GreetingContainer />
        <Modal/>
        <Switch>
            <ProtectedRoute exact path="/yourjobs" component={SavedJobs} />
            <ProtectedRoute exact path="/jobs/:jobId" component={JobPage} />
            <ProtectedRoute path="/jobs" component={JobsBoard} />
            <ProtectedRoute path="/" component={Splash} />
        </Switch>
    </div>
)};

export default App;