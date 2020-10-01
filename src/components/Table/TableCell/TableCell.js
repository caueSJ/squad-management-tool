
import React from 'react';

import './TableCell.scss';

// Sort options object
// const sortTypes = {
// 	asc: {
//         class: 'sort-asc',
// 		function: (a, b) => a.name - b.name
// 	},
// 	desc: {
// 		class: 'sort-desc',
// 		function: (a, b) => b.name - a.name
// 	},
// 	default: {
// 		class: 'sort',
// 		function: (a, b) => a
// 	}
// };

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