import React from 'react';
import './AllSongsTable.css'

const AllSongsTable = (props) => {
    return ( 
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table id='filterTable' className="table table-bordered">
                <thead>
                    <tr>
                        <th onClick={() => props.filterTable(0)}>Title</th>
                        <th onClick={() => props.filterTable(1)}>Artist</th>
                        <th onClick={() => props.filterTable(2)}>Album</th>
                        <th onClick={() => props.filterTable(3)}>Release Date</th>
                        <th onClick={() => props.filterTable(4)}>Genre</th>
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
     );
}

export default AllSongsTable;