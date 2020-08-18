import React, { Component } from 'react'
import { createThatQueen } from './queens-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        name: '',
        image_url: '',
        quote: '',
        winner: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createThatQueen({
            name: this.state.name,
            image_url: this.state.image_url,
            winner: this.state.winner,
            quote: this.state.quote,
        });

        this.setState({
            name: '',
            image_url:'',
            winner:'',
            quote: '',
        })
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleImageChange = e => {
        this.setState({ image_url: e.target.value });
    }

    handleWinnerChange = e => {
        this.setState({ winner: e.target.value });
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
                        Quote:
                        <input onChange={this.handleQuoteChange} value={this.state.quote} placeholder="Say something fierce!"></input>
                    </label>
                    <label>
                        What does she WIN?
                        <select onChange={this.handleWinnerChange} >
                            <option value='Winner'>She Wins It All!</option>
                            <option value='Congeniality'>She's Miss Congeniality!</option>
                            <option value='Loser'>Participation Trophy?</option>
                        </select>
                    </label>
                    <button>Add Queen</button>
                </form>
                
            </div>
        )
    }
}