import React from 'react'
import InputTag from '../InputTag/InputTag';

import RadioButton from '../RadioButton/RadioButton';
import TextArea from '../TextArea/TextArea';

import './Input.scss';

const Input = props => {
    let input = null;
    const classes = [props.className];

    if (props.invalid && props.shouldValidate && props.touched) {
        classes.push('invalid');
    }

    switch (props.type) {
        case 'input':
            input =
            <input
                {...props.config} //Input type
                className={classes.join(' ')}
                name={props.name}
                value={props.value}
                onChange={props.changed}
                placeholder={props.placeholder ? props.placeholder : null}
                required={props.required}
            />;
            break;

        case 'textarea':
            input =
            <TextArea
                name={props.name}
                autoComplete={props.autocomplete}
                cols={props.cols}
                rows={props.rows}
                placeholder={props.placeholder}
                className={classes.join(' ')}
                maxlength={props.maxlength}
                onChange={props.changed}
                onFocus={props.focused}
                onBlur={props.blured}
                required={props.required}
            >
                {props.value}
            </TextArea>
            break;

        case 'radio':
            input = (
                <div className="radio-group">
                    {props.config.options.map((option, key) => (
                        <RadioButton
                            key={key}
                            classes={classes}
                            name={props.name}
                            label={option.label}
                            id={props.name + "_" + option.value}
                            onChanged={props.changed}
                            value={option.value}
                            isSelected={props.value === option.value}
                            htmlRequired={props.required}
                        />
                    ))}
                </div>
            );
            break;
        
        case 'InputTag':
                return <InputTag label={props.label} />;

        default:
            input =
            <input 
                className={classes.join(' ')} 
                name={props.name}
                value={props.value}
                onChange={props.changed}
                onFocus={props.focused}
                onBlur={props.blured}
            />;
            break;
    }

    const label = props.label ? 
        <div className="label">
            <label>{props.label}</label>
        </div>
        : null;
    
    const inputGroup =
    <div className="wrapperInput">
        {input}
    </div>;
        

    return (
        <div className="Input">
            {label}
            {inputGroup}
        </div>
    );
}

export default Input