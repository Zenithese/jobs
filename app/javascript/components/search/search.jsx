import React from 'react';
import { connect } from 'react-redux';

function Search() {

    // const searchInput = React.useRef();

    // const displaySearch = () => {
    //     searchInput.style = { display: 'none' }
    // }

    return (
        <div>
            <input type="search"/>
            <button>Search</button>
        </div>
    )
}

const msp = state => {
    return {
        
    };
};

const mdp = dispatch => {
    return {
        
    };
};

export default connect(msp, mdp)(Search);