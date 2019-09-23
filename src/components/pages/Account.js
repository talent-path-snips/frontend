import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SignupForm from '../forms/SignupForm';
import LoginForm from '../forms/LoginForm';

export default class Account extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <LoginForm onSubmit={this.props.onLogin} />

        <SignupForm onSubmit={this.props.onRegister} />
      </>
    );
  }
}
