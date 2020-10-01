import React from 'react';

import './RadioButton.scss';

const RadioButton = props => {
    return (
        <div className="RadioButton">
            <input
                type="radio"
                name={props.name}
                id={props.id}
                onChange={props.changed}
                value={props.value}
                checked={props.isSelected}
                required={props.required}
            />
            <label 
                className={props.classes.join(' ')}
                htmlFor={props.id}
            >
                {props.label}
            </label>
        </div>
    )
}

export default RadioButton;
