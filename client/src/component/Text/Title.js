// import React JSX
import React from 'react';

const style = {
    margin: "auto",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center"
}

export const Title = ({text}) => 
    <p className='title' style={style}>{text}</p>