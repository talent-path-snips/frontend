import React from 'react';
import PropTypes from 'prop-types';
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

IconLink.propTypes = {
  info: PropTypes.shape({
    href: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
  }).isRequired,
};

export default IconLink;
