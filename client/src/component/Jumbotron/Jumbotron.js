// import react JSX
import React from 'react';
import './Jumbotron.css';

// create Jumbotron components
const Jumbotron = (props) => 
    <div className="jumbotron">{props.children}</div>

// export component
export default Jumbotron;