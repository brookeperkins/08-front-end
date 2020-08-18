import React, { Component } from 'react'
import { fetchThatQueen } from './queens-api.js';
import './App.css';

class DetailPage extends Component {
    state = {
        queen: {}
    }

    componentDidMount = async () => {
        const data = await fetchThatQueen(this.props.match.params.id)
    
        this.setState({
          queen: data.body
        })
      }
    
    render() {
        return (
            <main>
            <h2>All hail {this.state.queen.name}!</h2>
            <img alt={this.state.queen.image_url} src={this.state.queen.image_url} />
            <h2>What does she win?</h2>
            <p>{this.state.queen.winner}</p>
            <h2>As she always says:</h2> 
            <p>{this.state.queen.quote}!</p>
            </main>
        )
    }
}

export default DetailPage;