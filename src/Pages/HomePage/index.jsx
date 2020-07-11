import React from 'react';
import Navbar from '../../Components/Navbar';
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
import Footer from '../../Components/Footer';

const HomePage = () => {
  return (
    <div className="HomePage">
      {/* <Navbar /> */}
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
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage;
