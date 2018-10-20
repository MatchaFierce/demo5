import React, { Component } from 'react';
import Todos from './components/Todos/Todos';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Todos></Todos>}></Route>
            <Route path="/home" render={() => <h1>Estás en home</h1>}></Route>
            <Route path="/apps" render={() => <h1>Estás en apps</h1>}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
