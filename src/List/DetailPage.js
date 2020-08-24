import React, { Component } from 'react'
import { fetchThatQueen, deleteQueen, fetchThoseQueens, updateQueen } from '../Create/queens-api.js';
import '../App.css';

class DetailPage extends Component {
    state = {
        queen: {},
        name: '',
        image_url: '',
        winner: [],
        quote: ''
    }

    componentDidMount = async () => {
        const queenData = await fetchThatQueen(this.props.match.params.id);
        const queeniesData = await fetchThoseQueens();
        const matchWinner = queeniesData.body.find(winner => winner.winner === queenData.body.winner);
    
        this.setState({
          queen: queeniesData.body,
          name: queenData.body.name,
          image_url: queenData.body.image_url,
          winner: matchWinner.id,
          quote: queenData.body.quote
        })
      }

      handleSubmit = async (e) => {
          e.preventDefault();
          
          try {

            await updateQueen(this.props.match.params.id, {
                name: this.state.name,
                image_url: this.state.image_url,
                winner: this.state.winner,
                quote: this.state.quote
              })

              const updatedQueen = await fetchThatQueen(this.props.match.params.id)

              this.setState({
                  name: this.state.name,
                  image_url: this.state.image_url,
                  winner: this.state.winner,
                  quote: this.state.quote,
                  queen: updatedQueen.body
              })

            } catch (e) {
                console.log(e.message)
            }
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

    handleDelete = async () => {
        await deleteQueen(this.props.match.params.id);
    
        this.props.history.push('/');
    }
    
    render() {
        return (
            <main>
                <div className="newQueen">
                    <h2>All hail {this.state.queen.name}!</h2>
                    <img alt={this.state.queen.image_url} src={this.state.queen.image_url} />
                    <h3>What does she win?</h3>
                    <p>She wins: {this.state.queen.winner}</p>
                    <h3>As she always says:</h3> 
                    <p>{this.state.queen.quote}!</p>
                </div>
                <div>
                    <h2>Update Her?</h2>
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
                    <button className="update-button">Update Her!</button>
                    <button className="delete-button" onClick={this.handleDelete}>Delete Her!</button> 
                </form>
                </div>
            </main>
        )
    }
}

export default DetailPage;