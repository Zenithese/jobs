import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ user }){
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo right">{ user }</a>
                <ul className="left">
                    <li className=""><NavLink to="/yourjobs" className="navLinks">Your Saved Jobs</NavLink></li>
                    <li className=""><NavLink to="/jobs" className="navLinks">All Jobs</NavLink></li>
                    <li className=""><NavLink to="/solidarity" className="navLinks">Solidarity</NavLink></li>
                </ul>
            </div>
        </nav>
    ) 
}