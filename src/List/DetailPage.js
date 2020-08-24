import React, { Component } from 'react'
import { fetchThatQueen, deleteQueen, fetchWinners, updateQueen } from '../Create/queens-api.js'

export default class DetailPage extends Component {
    state = {
       queen: {},
        name: '',
        image_url: '',
        quote: '',
        winner_id: 1,
        winner_type: []
    }

    componentDidMount = async () => {
        const data = await fetchThatQueen(this.props.match.params.id);
        const winnersData = await fetchWinners();

        console.log(data)

        const matchedWinType = winnersData.body.find(winner => winner.winner_type === data.body.winner_type);

        console.log(matchedWinType)
    
        this.setState({
          winners: winnersData.body,
          name: data.body.name,
          image_url: data.body.image_url,
          quote: data.body.quote,
          winner: matchedWinType.id,
          queen: data.body
        })
      }
    
    handleSubmit = async (e) => {
        e.preventDefault();

        try {
        
            await updateQueen(this.props.match.params.id, {
            name: this.state.name,
            image_url: this.state.image_url,
            quote: this.state.quote,
            winner_id: this.state.winner_id
        });

        const updatedQueen = await fetchThatQueen(this.props.match.params.id)

        this.setState({
            name: '',
            image_url: '',
            quote: 1,
            winner_type: '',
            winner_id: 1,
            queen: updatedQueen.body
        });

        } catch (e) {
            console.log(e.message)
        }
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
    
    handleDelete = async () => {
        await deleteQueen(this.props.match.params.id);
    
        this.props.history.push('/');
    }
    
    render() {
        return (
            <main>
            <div className='newQueen'>
                <h2>All hail {this.state.queen.name}!</h2>
                <img alt={this.state.queen.image_url} src={this.state.queen.image_url} />
                <p>Quote: {this.state.queen.quote}</p>
                <p>She wins: {this.state.queen.winner_type}</p>
            </div>
            <div className="update-queen">
                <h2>UPDATE THIS QUEEN?</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name 
                        <input onChange={this.handleNameChange} placeholder='Name that Queen!' type="text" value={this.state.name}/>
                    </label>
                    <label>
                        Image:
                        <input onChange={this.handleImageChange} value={this.state.image_url} placeholder='Enter Image URL...' required />
                    </label>
                    <label>
                        Quote:
                        <input onChange={this.handleQuoteChange} value={this.state.quote} placeholder='Say something fierce!'></input>
                    </label>
                    <label>
                        What does she WIN?
                        <select onChange={this.handleWinnerChange} value={this.state.winner_id}>
                            {
                                this.state.winners.map((winner) => <option value={winner.id}>{winner.winner_type}</option>)
                            }
                        </select>
                    </label>
                    <button className="update-button">Update Her!</button>
                    <button className="delete-button" onClick={this.handleDelete}>Delete Her?</button> 
                </form>
            </div>
            </main>
        )
    }
}
