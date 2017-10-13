// IMPORT DEPENDENCIES
// --------------------------------------------------
import React from 'react';

const style ={
    margin: "1rem",
    fontSize: "2rem",
    padding: "0.5rem 2rem",
};

export const ArticleBtn = (props) =>

    <a
        style={style}
        href={props.url || `#\\`} 
        target="_blank"
        className={`btn btn-${props.type || 'primary'}`}>
                {props.children}
    </a>
