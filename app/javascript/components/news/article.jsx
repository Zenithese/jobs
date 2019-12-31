import React from 'react';

function article({ title }) {

    return(
        <div className="container">
            <div className="divider"></div>
            <div className="section">
                <h5>{title}</h5>
                <blockquote>Welcome to UnionBase::Jobs! A Rails/React/Redux job board. This site uses encryption and unique session tokens to keep users' credentials secure. When logged in, users can browse, read, and save potential jobs. Job postings would be handled by an internal team to ensure quality and legitemency. Thank you.</blockquote>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default article;