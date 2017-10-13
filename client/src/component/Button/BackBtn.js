// IMPORT DEPENDENCIES
// --------------------------------------------------
import React from 'react';
import {Link} from 'react-router-dom';

const style ={
    fontSize: "3rem",
    width: "100%"
}

export const BackBtn = (props) => 
    <Link to='/' style={{width: "100%"}}>
        <button  style={style} className={`btn btn-info`} onClick={props.handleReturn}>Return</button>
    </Link>