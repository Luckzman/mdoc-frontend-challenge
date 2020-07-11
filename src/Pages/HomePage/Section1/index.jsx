import React from 'react';
import { ReactComponent as Group2 } from '../../../Assets/Group 2.svg'
import { ReactComponent as Group3 } from '../../../Assets/Group 3.svg'
import { ReactComponent as Group4 } from '../../../Assets/Group 4.svg'
import { ReactComponent as Group5 } from '../../../Assets/Group 5.svg'

import './Section1.scss';

const Section1 = () => {
  return (
    <div className="Section1">
      <div className="container">
        <Group5 className="group5" />
        <h2>We put the patient at the center</h2>
        <div className="section1-para">
          <p>According to WHO, more Africans are dying early from diseases like
          obesity, high blood pressure, diabetes and cancer. At the same time,
          our mental health is suffering with more people with untreated
    depression and anxiety than ever before.</p>
          <p>We aim to change that using proven evidence-based interventions at
  scale.</p>
        </div>
        <div className="icons-group">
          <div className="icons-group-container">
            <Group2 className="icon" />
            <p>Connect with virtual
  eco-system</p>
          </div>
          <div className="icons-group-container">
            <Group3 className="icon pad" />
            <p className="pad">Find the quality care
  you need</p>
          </div>
          <div className="icons-group-container">
            <Group4 className="icon" />
            <p>Use tools to track
  progress and find care</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
