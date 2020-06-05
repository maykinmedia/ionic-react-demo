import React from 'react';
import './visual.css';

const Visual = (props) => {
    const className = `visual`;
    const color = (props.color.indexOf('#') > -1) ? props.color : `var(--ion-color-${props.color})`;

    return (
        <figure className={className} style={{backgroundColor: color}}>
            {props.children}
        </figure>
    );
};
Visual.defaultProps = {
    color: 'primary',
};

export default Visual;
