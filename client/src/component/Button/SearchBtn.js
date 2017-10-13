// IMPORT DEPENDENCIES
// --------------------------------------------------
import React from 'react';
import {Link} from 'react-router-dom';

const style ={
    margin: "auto",
    fontSize: "3rem",
    padding: "1 2rem",
    width: "25%",
    textDecoration: "none"
}

export const SearchBtn = (props) =>
    <Link to='/result' style={{margin: "auto"}}>
        <button
            style={{fontSize: "3rem"}}
            onClick={props.handleSubmit}  
            className={`btn btn-${props.type || 'primary'}`}
        >
            {props.children}
        </button>
    </Link>
