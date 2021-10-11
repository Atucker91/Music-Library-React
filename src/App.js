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
        let input, 
        filter, 
        table, 
        tr;
        
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        
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

    // filterTable (n) {
    //     let  rows, 
    //     shouldSwitch,
    //     i,
    //     x, 
    //     y, 
    //     dir = "asc",
    //     switchcount = 0, 
    //     table = document.getElementById("myTable"),
    //     switching = true;
    //     // Set the sorting direction to ascending:
    //     /* Make a loop that will continue until
    //     no switching has been done: */
    //     while (switching) {
    //         // Start by saying: no switching is done:
    //         switching = false;
    //         rows = table.rows;
    //         /* Loop through all table rows (except the
    //         first, which contains table headers): */
    //         for (i = 1; i < (rows.length - 1); i++) {
    //             // Start by saying there should be no switching:
    //             shouldSwitch = false;
    //             /* Get the two elements you want to compare,
    //             one from current row and one from the next: */
    //             x = rows[i].getElementsByTagName("td")[n];
    //             y = rows[i + 1].getElementsByTagName("td")[n];
    //             /* Check if the two rows should switch place,
    //             based on the direction, asc or desc: */
    //             if (dir == "asc") {
    //                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
    //                 // If so, mark as a switch and break the loop:
    //                 shouldSwitch = true;
    //                 break;
    //                 }
    //             } else if (dir == "desc") {
    //                 if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
    //                 // If so, mark as a switch and break the loop:
    //                 shouldSwitch = true;
    //                 break;
    //                 }
    //             }
    //         }
    //         if (shouldSwitch) {
    //         /* If a switch has been marked, make the switch
    //         and mark that a switch has been done: */
    //         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    //         switching = true;
    //         // Each time a switch is done, increase this count by 1:
    //         switchcount ++;
    //         } else {
    //         /* If no switching has been done AND the direction is "asc",
    //         set the direction to "desc" and run the while loop again. */
    //         if (switchcount == 0 && dir == "asc") {
    //             dir = "desc";
    //             switching = true;
    //         }
    //         }
    //     }
    // }

    render() { 
        return ( 
            <div>
                <h1>Hello</h1>
                <TableSearchBar searchBar={this.searchBar} />
                <AllSongsTable songList={this.state.songs} deleteSong={this.deleteSong} filterTable={this.filterTable} />
                <CreateNewSongForm createNewSong={this.createSong} />
            </div>
         );
    }
}
 
export default App;