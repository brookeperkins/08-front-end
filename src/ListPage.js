import React from 'react';
import { fetchThoseQueens } from './queens-api.js';
import { Link } from 'react-router-dom';
import './App.css';

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
        <header className="App-header">
          {console.log(this.state.queens)}
          <h2>The Queeniest Queens That Ever Did Queen</h2>
          {
            this.state.queens.map((queen) => {
              return <div className="queen-details">
                <img alt={queen.image_url} src={queen.image_url} />
                <Link className="queen" to={`/detail/${queen.id}`} key={`${queen.id}-${queen.name}`}>
                <h2 className="Queenie">It's {queen.name}!</h2> 
                </Link>
                <h3>Winner?</h3> 
                <p>{queen.winner ? 'Yes' : 'No'}</p>
                <h3>Miss Congeniality?</h3>
                <p>{queen.miss_congeniality ? 'Yes' : 'No'}</p>
              </div>
            })
          }
        </header>
        </div>

  //     <main>
  //     <h2>The Queeniest Queens That Ever Did Queen</h2>
  //     <ul>
  //         {
  //             this.props.queens.map((queen) => {
  //                 return <li>
  //                     <h3>{queen.name}</h3>
  //                     <img alt={queen.image_url} src={queen.image_url} />
  //                     <p>Winner: {queen.winner ? 'Yes' : 'No'}</p>
  //                     <p>Miss Congeniality: {queen.miss_congeniality ? 'Yes' : 'No'}</p>
  //                     <p>{queen.quote}</p>
  //                 </li>
  //             })
  //         }
  //     </ul>
  // </main>
    );
  }
  }

export default ListPage;