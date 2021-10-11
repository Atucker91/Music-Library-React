import axios from 'axios';
import React, {Component} from 'react';
import AllSongsTable from './components/AllSongsTable/AllSongsTable';
import CreateNewSongForm from './components/CreatNewSongForm/CreateNewSongForm';
import TableSearchBar from './components/TableSearchBar/TableSearchBar';

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
            console.log('Succes create in API call')
            let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
            let tempSong = this.state.songs;
            tempSong.push(response.data);
            this.setState({
                songs: tempSong
            })
            console.log(this.state.songs)
            this.getAllSongs()
        }
        catch (ex) {
            console.log('Error in API call', ex)
        }
    }

    deleteSong = async (id) => {
        try{
            console.log('Succes in delete API call')
            let response = await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
            let tempSong = this.state.songs;
            console.log(response.data)
            tempSong.splice(id, 1);
            this.setState({
                songs: tempSong
            })
            this.getAllSongs()
        }
        catch (ex) {
            console.log('Error in delete API call', ex)
        }
    }

    searchBar (){
        let input, filter, table, tr;
        
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        
        for (let i = 0; i < tr.length; i++) {
            let tds = tr[i].getElementsByTagName("td");
            let flag = false;
            
            for(let j = 0; j < tds.length; j++){
                let td = tds[j];
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    flag = true;
                } 
            }
            
            if(flag){
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }

    // filterTable () {

    // }

    render() { 
        return ( 
            <div>
                <h1>Hello</h1>
                <TableSearchBar searchBar={this.searchBar}/>
                <AllSongsTable songList={this.state.songs} deleteSong={this.deleteSong} />
                <CreateNewSongForm createNewSong={this.createSong}/>
            </div>
         );
    }
}
 
export default App;