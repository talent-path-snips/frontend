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
          id: 1,
          href: 'https://stackoverflow.com/',
          imageSrc: stackOverflowLogo,
          imageAlt: 'Colored StackOverflow brand logo',
        },
        {
          id: 2,
          href: 'https://wesbos.com/',
          imageSrc: wesBosLogo,
          imageAlt: 'Colored Wes Bos brand logo',
        },
        {
          id: 3,
          href: 'https://codepen.io/',
          imageSrc: codePenLogo,
          imageAlt: 'Colored CodePen brand logo',
        },
        {
          id: 4,
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
            <IconLink key={competitor.id} info={competitor} />
          ))}
        </div>
      </section>
    );
  }
}
