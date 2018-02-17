import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import PersonListPage from './pages/person-list-page';
import PersonAdd from './components/person-add';

class App extends Component {
  render() {
    return (
      <Container>        
        <Route exact path="/" component={PersonListPage} />
        <Route exact path="/add" component={PersonListPage} />
      </Container>
    );
  }
}

export default App;
