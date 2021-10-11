import React from 'react';

const TableSearchBar = (props) => {
    return ( 
        <div>
            <input type='text' id='myInput' onKeyUp={props.searchBar} placeholder='filter by title, artist, album, date, genre'></input>
        </div>
     );
}

export default TableSearchBar;