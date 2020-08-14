import React, { Component } from 'react'
import { createThatQueen } from './queens-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        name: '',
        winner: false,
        miss_congeniality: false,
        quote: '',
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createThatQueen({
            name: this.state.name,
            winner: this.state.winner,
            miss_congeniality: this.state.miss_congeniality,
            quote: this.state.quote,
        });

        this.setState({
            name: '',
            winner: false,
            miss_congeniality: false,
            quote: '',
        })
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleWinnerChange = e => {
        this.setState({ winner: e.target.value });
    }

    handleMissConChange = e => {
        this.setState({ miss_congeniality: e.target.value });
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
                        Is she a winner?
                        <select onChange={this.handleWinnerChange} placeholder="No">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Is she Miss Congeniality?
                        <select onChange={this.handleMissConChange} placeholder="No">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </label>
                    <label>
                        Quote:
                        <input onChange={this.handleQuoteChange} value={this.state.quote} placeholder="Say something fierce!"></input>
                    </label>
                    <button>Add Queen</button>
                </form>
                
            </div>
        )
    }
}