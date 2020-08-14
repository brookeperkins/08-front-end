import React, { Component } from 'react'
import { fetchThatQueen } from './queens-api.js';

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
            <div>
               Here's your Queen! All hail {this.state.queen.name}. As she always says: {this.state.queen.quote}!
            </div>
        )
    }
}

export default DetailPage;