import React from 'react';
import { ReactComponent as LocationIcon } from '../../../Assets/Group 7.svg'

import './TrackSection.scss';

const TrackSection = () => {
  return (
    <div className="TrackSection">
      <LocationIcon className="icon" />
      <h3>Track your progress and maintain
your health records</h3>
      <p>mDoc helps people maintain a personal health record and dashboard which allows them to track their progress in achieving their health goals. This secured information can be made available to any of their providers or caregivers at any time.</p>
    </div>
  );
}

export default TrackSection;
