import React, { Component } from 'react'
import { createThatQueen, fetchThoseQueens } from '../Create/queens-api.js';
import '../App.css';

export default class CreatePage extends Component {
    state = {
        name: '',
        image_url: '',
        quote: '',
        winner_id: []
    }

    componentDidMount = async () => {
        const queensData = await fetchThoseQueens()
    
        this.setState({
          queens: queensData.body
        })
      }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createThatQueen({
            name: this.state.name,
            image_url: this.state.image_url,
            winner_id: this.state.winner,
            quote: this.state.quote,
        });

        this.setState({
            name: '',
            image_url:'',
            winner_type:'',
            quote: '',
        })
        
        this.props.history.push('/');
    }



    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleImageChange = e => {
        this.setState({ image_url: e.target.value });
    }

    handleWinnerChange = e => {
        this.setState({ winner_id: e.target.value });
    }

    handleQuoteChange = e => {
        this.setState({ quote: e.target.value });
    }

    render() {
        return (
            <div className="main">
                <h2>Queen Creator</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name that Queen!"></input>
                    </label>
                    <label>
                        Image:
                        <input onChange={this.handleImageChange} value={this.state.image_url} placeholder='Enter Image URL...' required />
                    </label>
                    <label>
                        Quote:
                        <input onChange={this.handleQuoteChange} value={this.state.quote} placeholder="Say something fierce!"></input>
                    </label>
                    <label>
                        What does she WIN?
                        <select onChange={this.handleWinnerChange} >
                            <option value='Winner'>The CROWN!</option>
                            <option value='Congeniality'>Miss Congeniality!</option>
                            <option value='Loser'>A Participation Trophy?</option>
                        </select>
                    </label>
                    <button>Add Queen</button>
                </form>
                
            </div>
        )
    }
}