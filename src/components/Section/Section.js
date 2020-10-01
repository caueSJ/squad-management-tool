import React from 'react';

import './Section.scss';

const Section = props => {
    const classes = ['Section'];
    if (props.bgGradientH) {
        classes.push('bg-gradient-h');
    } else if(props.bgGradientV) {
        classes.push('bg-gradient-v');
    }

    return (
        <div className={classes.join(' ')}>
            {props.children}
        </div>
    )
};

export default Section;