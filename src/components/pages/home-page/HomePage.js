import React, { Component } from 'react';
import Hero from '../../hero';
import MarketingBlocks from '../../info-block';
import Competitors from '../../icon-link';

export default class HomePage extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <Hero />
        <MarketingBlocks />
        <Competitors />
      </>
    );
  }
}
