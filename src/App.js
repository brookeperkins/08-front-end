import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link
} from 'react-router-dom';
import Header from './Header.js';
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import DetailPage from './DetailPage.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
      return (
          <>
          <body>
              <Router>
                  <header>
                      <Header />
                      <nav>
                          <Link className="navLinks" to="/">Home</Link>
                          <Link className="navLinks" to="/create">Create</Link>
                      </nav>
                    </header>
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
                  <Footer />
              </Router>
          </body>
          </>
      )
  }
}

export default App;