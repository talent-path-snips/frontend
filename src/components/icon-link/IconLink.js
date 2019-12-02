import React from 'react';
import './IconLink.css';

const IconLink = props => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={props.info.href}
    className="icon-link"
  >
    <img
      src={props.info.imageSrc}
      alt={props.info.imageAlt}
      className="competitor"
    />
  </a>
);

export default IconLink;
