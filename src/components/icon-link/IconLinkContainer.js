import React, { Component } from 'react';
import IconLink from './IconLink';
import './IconLinkContainer.css';

//Image imports
import stackOverflowLogo from '../../assets/images/stack-overflow-logo.png';
import wesBosLogo from '../../assets/images/wes-bos-logo.png';
import codePenLogo from '../../assets/images/codepen-logo.png';
import dribbbleLogo from '../../assets/images/dribbble-icon.png';

export default class IconLinkContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      competitorsInfo: [
        {
          href: 'https://stackoverflow.com/',
          imageSrc: stackOverflowLogo,
          imageAlt: 'Colored StackOverflow brand logo',
        },
        {
          href: 'https://wesbos.com/',
          imageSrc: wesBosLogo,
          imageAlt: 'Colored Wes Bos brand logo',
        },
        {
          href: 'https://codepen.io/',
          imageSrc: codePenLogo,
          imageAlt: 'Colored CodePen brand logo',
        },
        {
          href: 'https://dribble.com/',
          imageSrc: dribbbleLogo,
          imageAlt: 'Colored Dribbble brand logo',
        },
      ],
    };
  }
  render() {
    return (
      <section id="competitors">
        <h2>Competitors</h2>
        <div className="icon-link-container">
          {this.state.competitorsInfo.map(competitor => (
            <IconLink info={competitor} />
          ))}
        </div>
      </section>
    );
  }
}
