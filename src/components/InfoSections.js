// InfoSections.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faUtensils, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import '../styles/InfoSections.css';

const InfoSections = () => (
  <div className="info-sections">
    <div className="info-section">
      <FontAwesomeIcon icon={faBullseye} />
      <h3>Goals</h3>
    </div>
    <div className="info-section">
      <FontAwesomeIcon icon={faUtensils} />
      <h3>Popular Dishes</h3>
    </div>
    <div className="info-section">
      <FontAwesomeIcon icon={faBookOpen} />
      <h3>Menus</h3>
    </div>
  </div>
);

export default InfoSections;
