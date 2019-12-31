import React from 'react';
import { Button, Link } from 'react-floating-action-button';
import { NavLink } from 'react-router-dom'

const FAB = ({ logout }) => {
    return (
        <div style={{ zIndex: '2147483647' }}className="fab-container undefined">
            <Link tooltip="Logout">
                    <i className="material-icons" style={{ cursor: "pointer" }} onClick={logout}>lock_outline</i>
            </Link>
            <Link tooltip="contact">
                <i className="material-icons" style={{ cursor: "pointer" }} onClick={logout}>format_quote</i>
            </Link>
            <Link tooltip="about">
                <i className="material-icons" style={{ cursor: "pointer" }} onClick={logout}>format_quote</i>
            </Link>
            <Button>
                <i className="material-icons">more_vert</i>
            </Button>
        </div>
    )
}

export default FAB;