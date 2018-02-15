import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import PersonListPage from './pages/person-list-page';

class App extends Component {
  render() {
    return (
      <Container>        
        <Route exact path="/" component={PersonListPage} />
      </Container>
    );
  }
}

export default App;
