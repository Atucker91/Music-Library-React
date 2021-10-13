import React from 'react';
import './AllSongsTable.css'

const AllSongsTable = (props) => {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-xl-12'>
                    <div className="table-wrapper-scroll-y my-custom-scrollbar rounded shadow-lg">
                        <table id='filterTable' className="table">
                            <thead>
                                <tr>
                                    <th className='button1' onClick={() => props.filterTable(0)}>Title</th>
                                    <th className='button1' onClick={() => props.filterTable(1)}>Artist</th>
                                    <th className='button1' onClick={() => props.filterTable(2)}>Album</th>
                                    <th className='button1' onClick={() => props.filterTable(3)}>Release Date</th>
                                    <th className='button1' onClick={() => props.filterTable(4)}>Genre</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                        
                            {props.songList.map(function(song){
                            return <tr>
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.album}</td>
                                    <td>{song.release_date}</td>
                                    <td>{song.genre}</td>
                                    <td><button onClick={() => props.deleteSong(song.id)}>Delete Song</button> </td>
                                    </tr>
                            })}
                            </tbody>
                        </table>        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AllSongsTable;