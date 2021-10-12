import React from 'react';
import './TableSearchBar.css'

const TableSearchBar = (props) => {
    return ( 
        <div className='search-bar'>
            <input className='form-control form-control-sm ml-3 w-75' type='text' id='myInput' onKeyUp={props.searchBar} placeholder='Search'></input>
        </div>
     );
}

export default TableSearchBar;