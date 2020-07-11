import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import DonationSection from './DonationSection';
import Section1 from './Section1';


const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <Banner />
      <DonationSection />
      <Section1 />
    </div>
  )
}

export default HomePage;
