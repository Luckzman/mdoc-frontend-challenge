import React from 'react';
import { ReactComponent as SmileyIcon } from '../../../Assets/mainicon (1).svg'

import './Banner3.scss';

const Banner3 = () => {
  return (
    <div className="Banner3">
      <div className="container">
        <SmileyIcon className="icon" />
        <h3>Live a longer, healthier happier, life</h3>
        <p>Our framework incorporates elements from several evidence-based approaches including the Wagner Chronic Care model - improvement in health requires an approach that incorporates patient, provider, community and system level interventions.</p>
      </div>
    </div>
  );
}

export default Banner3;
