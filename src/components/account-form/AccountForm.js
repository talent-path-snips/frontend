import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
    };
  }

  handleChange = (event, field) => {
    const { value } = event.target;

    this.setState({
      [field]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <section className="forms">
        <div className="signupForm">
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name" className="halfwidth">
              Name
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={event => this.handleChange(event, 'name')}
              />
            </label>
            <label htmlFor="password" className="halfwidth">
              Password
              <input
                name="password"
                type="text"
                value={this.state.password}
                onChange={event => this.handleChange(event, 'password')}
              />
            </label>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </section>
    );
  }
}

AccountForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
