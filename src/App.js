import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link
} from 'react-router-dom';
import Header from './Header.js';
import ListPage from './List/ListPage.js';
import CreatePage from './Create/CreatePage.js';
import DetailPage from './List/DetailPage.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="body">
              <Router>
                      <Header />
                      <nav>
                          <Link className="navLinks" to="/">Home</Link>
                          <Link className="navLinks" to="/create">Create</Link>
                      </nav>
                    <div className="main">
                    <Switch>
                        <Route 
                          path="/" 
                          exact
                          render={(routerProps) => <ListPage {...routerProps} />} 
                      />
                      <Route 
                          path="/create" 
                          exact
                          render={(routerProps) => <CreatePage {...routerProps} />} 
                      />
                      <Route 
                          path="/detail/:id" 
                          exact
                          render={(routerProps) => <DetailPage {...routerProps} />} 
                      />
                    </Switch>
                    </div>
                  <Footer />
              </Router>
          </div>
      )
  }
}

export default App;