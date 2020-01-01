import React, { useState, useEffect } from 'react';
import { Button, Link } from 'react-floating-action-button';
import { Redirect } from 'react-router-dom'

const FAB = ({ logout }) => {
    const [ redirect, setRedirect ] = useState(false);

    const searchRedirect = () => {
        setRedirect(true);
    }

    useEffect(() => {
        setRedirect(false)
    }, [redirect])

    if (redirect) {
        return (
            <Redirect to="/search" />
        )
    }

    return (
        <div>
            <div style={{ zIndex: '2147483647' }}className="fab-container undefined">
                <Link tooltip="Logout">
                        <i className="material-icons" style={{ cursor: "pointer" }} onClick={logout}>lock_outline</i>
                </Link>
                <Link tooltip="contact">
                    <i className="material-icons" style={{ cursor: "pointer" }} onClick={logout}>message</i>
                </Link>
                <Link tooltip="Search">
                    <i className="material-icons" style={{ cursor: "pointer" }} onClick={() => searchRedirect()} >search</i>
                </Link>
                <Button>
                    <i className="material-icons">more_vert</i>
                </Button>
            </div>
        </div>
    )
}

export default FAB;