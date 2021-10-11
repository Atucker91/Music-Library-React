import React from 'react';

const AllSongsTable = (props) => {
    return ( 
        <div>
            {/* <input type='text' id='myInput' onKeyUp={props.filterList} placeholder='filter by title, artist, album, date, genre'></input> */}
            <table id='myTable'>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
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