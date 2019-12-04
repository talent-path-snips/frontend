import React, { Component } from 'react';

import AccountForm from '../../account-form';

export default class AccountPage extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  render() {
    //HACK: Short circuiting the design with a single form
    return this.state.isLogin ? (
      <AccountForm onSubmit={this.props.onLogin} />
    ) : (
      <AccountForm onSubmit={this.props.onSignup} />
    );
  }
}
