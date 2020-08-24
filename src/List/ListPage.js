import React from 'react';
import { fetchThoseQueens } from '../Create/queens-api.js';
import { Link } from 'react-router-dom';
import '../App.css';

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
              return <div className="queen-details">
                <Link className="queen" to={`/detail/${queen.id}`} key={`${queen.id}-${queen.name}`}>
                  <h2>All hail {queen.name}!</h2>
                </Link>
                <img alt={queen.image_url} src={queen.image_url} />
                <h3>What does she win?</h3>
                <p>She wins: {queen.winner}</p>
                <h3>As she always says:</h3> 
                <p>{queen.quote}!</p>
              </div>
            })
          }
        </section>
        </div>
    );
  }
  }

export default ListPage;