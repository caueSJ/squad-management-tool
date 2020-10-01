import React from 'react';

import './Select.scss';

const Select = props => {
    const classes = ['Select'];
    props.className && classes.push(props.className);
    return (
        <select className={classes.join(' ')}>
            {props.children}
        </select>
    )
}

export default Select;