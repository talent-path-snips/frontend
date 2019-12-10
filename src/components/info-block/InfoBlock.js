import React from 'react';
import PropTypes from 'prop-types';
import './InfoBlock.css';

const InfoBlock = props => (
  <div className="info-block">
    <img src={props.info.imageSrc} alt={props.info.imageAlt} />
    <p>{props.info.textInfo}</p>
  </div>
);

InfoBlock.propTypes = {
  info: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    textInfo: PropTypes.string.isRequired,
  }).isRequired,
};

export default InfoBlock;
