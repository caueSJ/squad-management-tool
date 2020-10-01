import React from 'react';

import './SelectOption';

const SelectOption = props => {
    const classes = ['SelectionOption'];
    classes.push(props.className);
    return (
        <option
            className={classes.join(' ')}
            value={props.value}
            onChange={props.onChanged}
            value={props.value}
            defaultValue={props.isSelected}
            required={props.required}
            >
            {props.placeholder}
        </option>
    )
}

export default SelectOption;