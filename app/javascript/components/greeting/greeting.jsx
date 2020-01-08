import React from 'react';
import Navbar from '../navbar/navbar';
import FAB from '../FAB/fab';
var $ = require('jquery');

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="greeting-background">
            <div className="greeting-child">
                <h1 className="blue-text">UnionBase::Jobs</h1>
                <div className="center">
                    <a className="blue-text" style={{ cursor: 'pointer' }} onClick={() => openModal('login')}>Login</a>
                    &nbsp;or&nbsp;
                    <a className="blue-text" style={{ cursor: 'pointer' }} onClick={() => openModal('signup')}>Sign up!</a>
                </div>
            </div>
        </div>
        
    );
    const personalGreeting = () => (
        <hgroup className="">
            <Navbar user={currentUser.username}/>
            {/* <Search /> */}
            <FAB logout={logout}/>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;