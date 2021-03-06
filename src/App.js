import axios from 'axios';
import React, {Component} from 'react';
import AllSongsTable from './components/AllSongsTable/AllSongsTable';
import CreateNewSongForm from './components/CreatNewSongForm/CreateNewSongForm';
import TableSearchBar from './components/TableSearchBar/TableSearchBar';
import Footer from './components/Footer/Footer';
import './App.css'
import img from './TOS2.png'
import img2 from './TOSR.png'
import img3 from './TOSL.png'

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
        let input, 
        filter, 
        table, 
        tr;
        
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("filterTable");
        tr = table.getElementsByTagName("tr");

        console.log(table);
        
        for (let i = 1; i < tr.length; i++) {
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

    filterTable (n) {
        let table, 
        rows, 
        switching, 
        i, 
        x, 
        y, 
        shouldSwitch, 
        dir, switchcount = 0;

        table = document.getElementById("filterTable");
        switching = true;
        dir = "asc";
        
        while (switching) {
          
          switching = false;
          rows = table.rows;
         
          for (i = 1; i < (rows.length - 1); i++) {
            
            shouldSwitch = false;
            
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            
            if (dir == "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
            } else if (dir == "desc") {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
          } else {
            
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }

    render() { 
        return ( 
            <div>
                <div className="row">
                     <div className="col-sm-1 col-md-2 col-xl-2 nopadding">
                     <img src={img3} alt="Dwyer" height='100%' width='100%'/>
                     </div>
                    <div className="col-sm-10 col-md-8 col-xl-8 ml-background2 shadow-lg ">
                        <TableSearchBar searchBar={this.searchBar} />
                        <CreateNewSongForm createNewSong={this.createSong} />
                        <AllSongsTable songList={this.state.songs} deleteSong={this.deleteSong} filterTable={this.filterTable} />    
                    </div>
                    <div className="col-sm-1 col-md-2 col-xl-2 nopadding">
                    <img src={img2} alt="Dwyer" height='100%' width='100%'/>
                    </div>
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>
         );
    }
}
 
export default App;