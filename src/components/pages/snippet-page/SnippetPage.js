import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchBar from '../../search-bar';
import SnipList from '../../snippet-list';

export default class Snippets extends Component {
  static propTypes = {};

  constructor(props) {
    // call parent (React.Component) constructor
    super(props);

    // set intial state
    this.state = {
      snippets: [],
    };
  }

  async componentDidMount() {
    console.log('App Mounted');
    // 1. request the data from our server
    const { data } = await axios.get(
      'https://maney-snips.herokuapp.com/api/snippets'
    );
    // 2. hold that data in state so that it will be passed down to our Snips
    this.setState({
      snippets: data,
    });
  }

  fetchSnippets = async searchText => {
    // fetch snippets from database
    const { data: snippets } = await axios.get(
      'https://maney-snips.herokuapp.com/api/snippets'
    );

    // inner function for string matching
    const matchStr = (str, toMatch) =>
      str.toLowerCase().includes(toMatch.toLowerCase());
    // filter them
    const filteredSnips = snippets.filter(
      snippet =>
        matchStr(snippet.title || '', searchText) ||
        matchStr(snippet.description || '', searchText) ||
        matchStr(snippet.code || '', searchText) ||
        matchStr(snippet.language || '', searchText)
    );

    // set state
    this.setState({
      snippets: filteredSnips,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar onSearch={this.fetchSnippets} />
        <SnipList snippets={this.state.snippets} />
      </React.Fragment>
    );
  }
}
