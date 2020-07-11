import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import DonationSection from './DonationSection';
import Section1 from './Section1';
import HowItWorks from './HowItWorks';
import Connect from './Connect';


const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <Banner />
      <DonationSection />
      <Section1 />
      <HowItWorks />
      <Connect />
    </div>
  )
}

export default HomePage;
