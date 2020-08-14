import React, { Component } from 'react'
import { fetchQueen } from './queens-api.js';

class DetailPage extends Component {
    state = {
        queen: {}
    }

    componentDidMount = async () => {
        const data = await fetchQueen(this.props.match.params.id)
    
        this.setState({
          queen: data.body
        })
      }
    

    render() {
        return (
            <div>
               Here is your sick axe <span role="img" aria-label="sick-axe">🎸</span>: It is {this.state.queen.color} and it has {this.state.queen.strings} strings!
            </div>
        )
    }
}

export default DetailPage;