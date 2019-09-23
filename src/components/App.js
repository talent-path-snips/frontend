/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Pages from './pages/index';
import './App.css';
import '../css/style.css';

class App extends React.Component {
  componentDidMount() {
    this.setToken();
  }
  submitRegistration = async registrationData => {
    console.log('Hello from Signup');
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/signup`,
      registrationData
    );
    console.log(res);
  };
  submitLogin = async loginData => {
    console.log('Hello from Login', loginData);
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      loginData
    );
    localStorage.setItem('app-token', res.data.token);
    this.setToken(res.data.token);
  };

  setToken = (token = null) => {
    let tempToken = token;
    if (tempToken !== null) {
      tempToken = localStorage.getItem('app-token');
      if (tempToken !== null) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${tempToken}`;
      }
    }
  };

  render() {
    const { Home, About, Snippets, Account, FourOhFour } = Pages;
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/snippets" component={Snippets} />
          <Route
            path="/account"
            render={() => (
              <Account
                onLogin={this.submitLogin}
                onRegister={this.submitRegistration}
              />
            )}
          />
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    );
  }
}

export default App;
