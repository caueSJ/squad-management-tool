import React from 'react';

import './Select.scss';

const Select = props => {
    return (
        <select className={props.className}>
            {props.children}
        </select>
    )
}

export default Select;