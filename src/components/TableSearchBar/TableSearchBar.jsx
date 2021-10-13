import React from 'react';
import './TableSearchBar.css'

const TableSearchBar = (props) => {
    return ( 
        <div className='container'>
            <div className='row ml-row rounded'>
                <div className='col-sm-3 col-md-3 col-xl-3'>
                    <h2>Music Library</h2>
                </div>
                    <div className='col-sm-6 col-md-6 col-xl-6'>
                    </div>
                <div className='col-sm-3 col-md-3 col-xl-3'>
                    <input className='form-control form-control-sm ml-3 w-75' type='text' id='myInput' onKeyUp={props.searchBar} placeholder='Search' aria-label="Search"></input>
                </div>
            </div>
        </div>
     );
}

export default TableSearchBar;