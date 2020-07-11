import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import DonationSection from './DonationSection';
import Section1 from './Section1';
import HowItWorks from './HowItWorks';
import Connect from './Connect';
import Navigate from './Navigate';
import TrackSection from './TrackSection';
import Banner3 from './Banner3';
import PartnerSection from './PartnerSection';
import LearnMoreSection from './LearnMoreSection';


const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <Banner />
      <DonationSection />
      <Section1 />
      <HowItWorks />
      <Connect />
      <Navigate />
      <TrackSection />
      <Banner3 />
      <PartnerSection />
      <LearnMoreSection />
    </div>
  )
}

export default HomePage;
