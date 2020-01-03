import React, { useEffect } from 'react';
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

import JobsBoard from '../components/jobs_board/jobs_board';
import SavedJobs from './saved_jobs/saved_jabs';
import JobPage from './job_page/job_page';
import Splash from './splash/splash';
import Search from './search/search'
import Modal from '../components/session_form/modal';
import ContactModal from './job_page/contact_modal';
// import chat_widget from './chat/chat_widget';
// import { loadReCaptcha } from 'react-recaptcha-v3';
import { loadReCaptcha } from 'react-recaptcha-google';

const App = () => {

    useEffect(() => {
        loadReCaptcha('6Lc31ckUAAAAAIPoaFyy5lrj9wCB6onKMP-kGIsf');
    }, []);

    return (
    <div>
        <GreetingContainer />
        <Modal />
        <ContactModal />
        <Switch>
            <ProtectedRoute exact path="/yourjobs" component={SavedJobs} />
            <ProtectedRoute exact path="/jobs/:jobId" component={JobPage} />
            <ProtectedRoute path="/jobs" component={JobsBoard} />
            <ProtectedRoute path="/search" component={Search} />
            <ProtectedRoute path="/" component={Splash} />
            {/* <ProtectedRoute path="/" component={chat_widget} /> */}
        </Switch>
    </div>
)};

export default App;