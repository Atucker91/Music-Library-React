import React from 'react';
import './TableSearchBar.css'

const TableSearchBar = (props) => {
    return ( 
        <div className='search-bar'>
            <p>Search</p>
            <input type='text' id='myInput' onKeyUp={props.searchBar} placeholder='Search by title, artist, album, date, genre'></input>
        </div>
     );
}

export default TableSearchBar;