// App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AnecdoteList from './components/AnecdoteList';
import CreateAnecdote from './components/CreateAnecdote';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <h1>My Anecdotes App</h1>
      <Menu />

      <Switch>
        <Route path="/create" component={CreateAnecdote} />
        <Route path="/" component={AnecdoteList} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;