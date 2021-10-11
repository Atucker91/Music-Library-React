import React from 'react';

const AllSongsTable = (props) => {
    return ( 
        <div>
            {/* <input type='text' id='myInput' onKeyUp={props.filterList} placeholder='filter by title, artist, album, date, genre'></input> */}
            <table id='filterTable'>
                <tr>
                    <th onClick={() => props.filterTable(0)}>Title</th>
                    <th onClick={() => props.filterTable(1)}>Artist</th>
                    <th onClick={() => props.filterTable(2)}>Album</th>
                    <th onClick={() => props.filterTable(3)}>Release Date</th>
                    <th onClick={() => props.filterTable(4)}>Genre</th>
                    <th>Delete</th>
                </tr>
                
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
                
            </table>
        </div>
     );
}

export default AllSongsTable;