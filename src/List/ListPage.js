import React from 'react';
import { fetchThoseQueens } from '../Create/queens-api.js';
import '../App.css';
import { Link } from 'react-router-dom'

class ListPage extends React.Component {
  state = {
    queens: [] 
  }

  componentDidMount = async () => {
    const data = await fetchThoseQueens()

    this.setState({
      queens: data.body
    })
  }

  render() {
    return (
      <div className="App">
        <section className="listed-items">
          <h2>The Queeniest Queens That Ever Did Queen</h2>
          {
            this.state.queens.map((queen) => {
              return <Link to={`detail/${queen.id}`} key={`{queen.id}-{queen.name}`}>
                <h2>All hail {queen.name}!</h2>
                <img alt={queen.image_url} src={queen.image_url} />
                <h3>What does she win?</h3>
                <p>{queen.winner}</p>
                <h3>As she always says:</h3> 
                <p>{queen.quote}!</p>
              </Link>
            })
          }
        </section>
        </div>
    )
}
}

export default ListPage;
