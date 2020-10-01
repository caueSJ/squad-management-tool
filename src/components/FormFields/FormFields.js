import React from 'react';

import './FormFields.scss';

const FormFields = props => {
    const classes = ['FormFields', `FormFields${props.index}`];
        
    return (
        <div className={classes.join(' ')}>
            {props.children}
        </div>
    );
};

export default FormFields;