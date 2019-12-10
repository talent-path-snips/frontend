import React, { Component } from 'react';
import InfoBlock from './InfoBlock';

//Image imports
import beAwesomeImage from '../../assets/images/be-awesome-code-snippet.jpg';
import snippetImage from '../../assets/images/snip-2.png';
import pythonTweetImage from '../../assets/images/python-tweets-code-snippet.png';

export default class InfoBlockContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marketingInfo: [
        {
          id: 1,
          imageSrc: beAwesomeImage,
          imageAlt: 'Snip 1',
          textInfo:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repudiandae dolor maxime libero, autem veniam non ea porro quisquam maiores itaque hic, ut quod doloremque ipsum quis mollitia magni esse?',
        },
        {
          id: 2,
          imageSrc: snippetImage,
          imageAlt: 'Snip 2',
          textInfo:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repudiandae dolor maxime libero, autem veniam non ea porro quisquam maiores itaque hic, ut quod doloremque ipsum quis mollitia magni esse?',
        },
        {
          id: 3,
          imageSrc: pythonTweetImage,
          imageAlt: 'Snip 3',
          textInfo:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repudiandae dolor maxime libero, autem veniam non ea porro quisquam maiores itaque hic, ut quod doloremque ipsum quis mollitia magni esse?',
        },
      ],
    };
  }
  render() {
    return (
      <section>
        {this.state.marketingInfo.map(infoBlock => (
          <InfoBlock key={infoBlock.id} info={infoBlock} />
        ))}
      </section>
    );
  }
}
