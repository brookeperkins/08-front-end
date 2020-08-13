import React from 'react';
import { fetchThoseQueens } from './queens-api.js';
import './App.css';

class App extends React.Component {
  state = {
    queens: []
  }
  componentDidMount = async () => {
    const data = await fetchThoseQueens()

    this.setState({
      queens: data.body
    })
  };
  
render() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Look at these Queens!</h2>
      {
        this.state.queens.map((queen) => {
          return <div style={{ margin: 5, padding: 5, border: 'solid 4px pink'}}>
            {queen.name} : {queen.quote}
            </div>
        })
      }
      </header>
    </div>

  )
  }
}

export default App;