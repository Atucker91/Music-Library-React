import axios from 'axios';
import React, {Component} from 'react';
import AllSongsTable from './components/AllSongsTable/AllSongsTable';
import CreateNewSongForm from './components/CreatNewSongForm/CreateNewSongForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }

    componentDidMount(){
        this.getAllSongs()
    }

    getAllSongs = async () => {
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }

    createSong = async (newSong) => {
        try{
            console.log('Succes in API call')
            let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
            let tempSong = this.state.songs;
            tempSong.push(response.data);
            this.setState({
                songs: tempSong
            })
            this.getAllSongs()
        }
        catch (ex) {
            console.log('Error in API call', ex)
        }
    }

    render() { 
        return ( 
            <div>
                <h1>Hello</h1>
                <AllSongsTable songList={this.state.songs} />
                <CreateNewSongForm createNewSong={this.createSong}/>
            </div>
         );
    }
}
 
export default App;