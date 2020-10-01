import React from 'react';

import './SelectOption';

const SelectOption = props => {
    const classes = ['SelectionOption'];
    classes.push(props.className);
    return (
        <option
            className={classes.join(' ')}
            value={props.value}
            onChanged={props.onChanged}
            value={props.value}
            selected={props.isSelected}
            htmlRequired={props.required}
            >
            {props.placeholder}
        </option>
    )
}

export default SelectOption;