import React from 'react';

import './Section.scss';

const Section = props => {
    const classes = ['Section'];
    if (props.bgGradient) {
        classes.push('bg-gradient');
    }

    return (
        <div className={classes.join(' ')}>
            {props.children}
        </div>
    )
};

export default Section;