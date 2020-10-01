import React from 'react';

import './Table.scss';

const Table = props => {
    return (
        <div className="wrapper-table">
            <table className="Table">
                {props.children}
            </table>
        </div>        
    )
}

export default Table;