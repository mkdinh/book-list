// IMPORT DEPENDENCIES
// --------------------------------------------------
import React from 'react';
import {Link} from 'react-router-dom';


export const SearchBtn = (props) =>

    <Link to='/result' style={{margin: "auto"}}>
        <button
            style={{fontSize: "2rem"}}
            onClick={props.handleSubmit}  
            className={`btn btn-${props.type || 'primary'}`}
        >
            {props.children}
        </button>
    </Link>
