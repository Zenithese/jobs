import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ user }){
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo left">{ user }</a>
                {/* <form className="left">
                    <div className="input-field">
                        <input id="search" type="search" required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form> */}
                <ul className="right">
                    <li className=""><NavLink to="/yourjobs" className="navLinks">Your Saved Jobs</NavLink></li>
                    <li className=""><NavLink to="/jobs" className="navLinks">All Jobs</NavLink></li>
                    <li className=""><NavLink to="/solidarity" className="navLinks">Solidarity</NavLink></li>
                </ul>
            </div>
        </nav>
    ) 
}