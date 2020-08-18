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
            <div className="detail">
            <h2>All hail {this.state.queen.name}!</h2>
            As she always says: {this.state.queen.quote}!
            </div>
        )
    }
}

export default DetailPage;