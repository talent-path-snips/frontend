import React, { Component } from 'react';
import axios from '../../../utils/axios';
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
    // 1. request the data from our server
    const { data } = await axios.get(`/snippets`);
    // 2. hold that data in state so that it will be passed down to our Snips
    this.setState({
      snippets: data,
    });
  }

  fetchSnippets = async searchText => {
    // fetch snippets from database
    const { data: snippets } = await axios.get('/snippets');

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
