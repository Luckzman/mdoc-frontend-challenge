import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import DonationPage from './Pages/DonationPage';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import CovidHelpPage from './Pages/CovidHelpPage';
import ResourcePage from './Pages/ResourcePage';
import ResourceListPage from './Pages/ResourceListPage';
import ResourceDetailsPage from './Pages/ResourceDetailsPage';

import './reset.css';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route path="/donate"><DonationPage /></Route>
        <Route path="/help-covid"><CovidHelpPage /></Route>
        <Route path="/resource"><ResourcePage /></Route>
        <Route path="/resource-list"><ResourceListPage /></Route>
        <Route path="/resource-details"><ResourceDetailsPage /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
