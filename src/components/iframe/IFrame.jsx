import React from 'react';
import './iframe.css';

const IFrame = (props) => {
    const className = 'iframe';

    return (
        <iframe className={className} src={props.src}/>
    );
};

export default IFrame;

