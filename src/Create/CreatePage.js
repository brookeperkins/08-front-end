import React, { Component } from 'react'
import { createThatQueen, fetchWinners } from './queens-api.js'
import '../App.css'

export default class CreatePage extends Component {
    state = {
        name: '',
        image_url: '',
        quote: '',
        winner_id: 1,
        winners: []
    }

    componentDidMount = async () => {
        const winnersData = await fetchWinners()
    
        this.setState({
          winners: winnersData.body
        })
      }
    
    handleSubmit = async (e) => {
        e.preventDefault();

        await createThatQueen({
            name: this.state.name,
            image_url: this.state.image_url,
            quote: this.state.quote,
            winner_id: this.state.winner_id
        });

        this.setState({
            name: '',
            image_url: '',
            quote: 1,
            winner_type: ''
        })

        this.props.history.push('/');
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    
    handleImageChange = (e) => {
        this.setState({ image_url: e.target.value });
    }

    handleQuoteChange = (e) => {
        this.setState({ quote: e.target.value });
    }

    handleWinnerChange = (e) => {
        this.setState({ winner_id: e.target.value })
    }
    
    
    render() {
        return (
            <div className="main">
                <h2>Queen Creator</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input onChange={this.handleNameChange} type="text" value={this.state.name}/>
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
                        <select onChange={this.handleWinnerChange} value={this.state.winner_id}>
                            {
                                this.state.winners.map((winner) => <option value={winner.id}>{winner.winner_type}</option>)
                            }
                        </select>
                    </label>
                    <button>Add Queen</button>
                </form>
            </div>
        )
    }
}
