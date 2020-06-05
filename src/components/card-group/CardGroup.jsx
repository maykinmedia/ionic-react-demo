import React from 'react';
import './card-group.css';


const CardGroup = (props) => {
    const className = `card-group`;


    return (
        <section className={className}>
            {props.children}
        </section>

    );
};

export default CardGroup;
