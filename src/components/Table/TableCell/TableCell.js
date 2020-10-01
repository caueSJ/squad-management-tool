
import React from 'react';

import './TableCell.scss';

const TableCell = props => {    
    const classes = ['TableCell'];
    (props.class) && classes.push('action-icons');
    return (
        <td className={classes.join(' ')} colSpan={props.colspan}>
            {props.children}
        </td>
    )
}

export default TableCell;