import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import NotesList from './components/NotesList';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <div className="container p-4">
            <Route path="/" exact component={NotesList} />
            <Route path="/edit/:id" component={CreateNote} />
            <Route path="/create" component={CreateNote} />
            <Route path="/user" component={CreateUser} />
          </div>
        </Switch>
      </Router>
    );
  }
}
