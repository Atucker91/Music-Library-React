import React, {Component} from 'react';
import './CreateNewSongForm.css'


class CreateNewSongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSong(this.state)
    }

    render() { 
        return ( 
            <div className='container'>
                <div className='row ml-row'>
                    <div className='col-sm-1 col-md-2 col-xl-2'></div>
                    <div className='col-sm-4 col-md-10 col-xl-10'>
                        <form onSubmit={this.handleSubmit}>

                            <div className='row'>
                                <div className='col-sm-2 col-md-4 col-xl-4'>
                                    <input className='form-control' name="title" onChange={this.handleChange} value={this.state.title} placeholder='Title'/>
                                </div>
                                <div className='col-sm-2 col-md-4 col-xl-4'>
                                    <input className='form-control' name="artist" onChange={this.handleChange} value={this.state.artist} placeholder='Artist'/>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-sm-2 col-md-4 col-xl-4'>                                        
                                    <input className='form-control' name="album" onChange={this.handleChange} value={this.state.album} placeholder='Album'/>
                                </div>
                                <div className='col-sm-2 col-md-4 col-xl-4'>
                                    <input className='form-control' name="release_date" onChange={this.handleChange} type='date' value={this.state.release_date} placeholder='Release Date'/>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-sm-2 col-md-4 col-xl-4'>
                                    <input className='form-control' name="genre" onChange={this.handleChange} value={this.state.genre} placeholder='Genre'/>
                                </div>
                                <div className='col'>
                                    <button type="submit">Add Song</button>
                                </div>
                            </div>
                            
                        </form> 
                    </div>
                    <div className='col-sm-1 col-md-2 col-xl-2'></div>
                </div>
            </div>
        );
    }
}
 
export default CreateNewSongForm;