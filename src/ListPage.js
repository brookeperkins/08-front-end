import React from 'react';
import { fetchThoseQueens } from './queen-api.js';
import { Link } from 'react-router-dom';
import './App.css';

class ListPage extends React.Component {
  state = {
    derby_players: []
  }

  componentDidMount = async () => {
    const data = await fetchThoseQueens()

    this.setState({
      derby_players: data.body
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>The Queeniest Queens That Ever Did Queen</h2>
          {
            this.state.queens.map((queen) => {
              return <Link className="queen" to={`/detail/${queen.id}`} key={`${queen.id}-${queen.name}`}>
                <div style={{ margin: 5, padding: 5, border: 'solid 3px purple'}}>
                {queen.name} : {queen.winner ? 'Yes' : 'No'} : {queen.miss_congeniality ? 'Yes' : 'No'} : {queen.quote}
              </div>
              </Link>
            })
          }
        </header>
        </div>
    );
  }
  }

export default ListPage;