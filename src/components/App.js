/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Pages from './pages/index';
import './App.css';
import '../css/style.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Pages.Home} />
          <Route path="/about" exact component={Pages.About} />
          <Route path="/snippets" component={Pages.Snippets} />
          <Route path="/account" component={Pages.Account} />
          <Route component={Pages.FourOhFour} />
        </Switch>
      </Router>
    );
  }
}

export default App;
