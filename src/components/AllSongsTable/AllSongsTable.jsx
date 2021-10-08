import React from 'react';

const AllSongsTable = (props) => {
    return ( 
        <div>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
                
                {props.songList.map(function(song){
                        return <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                        </tr>
                    })}
                
            </table>
        </div>
     );
}

export default AllSongsTable;