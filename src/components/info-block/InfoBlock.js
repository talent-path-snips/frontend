import React from 'react';
import './InfoBlock.css';

const InfoBlock = props => (
  <div className="info-block">
    <img src={props.info.imageSrc} alt={props.info.imageAlt} />
    <p>{props.info.textInfo}</p>
  </div>
);

export default InfoBlock;
