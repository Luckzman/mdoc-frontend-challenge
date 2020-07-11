import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import DonationSection from './DonationSection';


const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <Banner />
      <DonationSection />
    </div>
  )
}

export default HomePage;
