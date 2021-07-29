import React from 'react'

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    return (
        <span>
            Search:{''}
            <input
            value={filterValue || ''}
            onchange={(e) => setFilter(e.target.value)}
            />
        </span>
    )
}
