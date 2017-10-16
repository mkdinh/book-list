// import React JSX
import React from 'react';

const style = {
    margin: "auto",
    fontSize: "3rem"
}

export const Title = ({text}) => 
    <p className='title' style={style}>{text}</p>