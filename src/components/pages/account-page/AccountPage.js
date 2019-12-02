import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SignupForm from '../../signup-form';
import LoginForm from '../../login-form';

export default class AccountPage extends Component {
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
