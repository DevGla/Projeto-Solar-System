import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <PlanetCard planetName="" />
        <PlanetCard planetImage="" />
        <Missions />
        <MissionCard name="name" />
        <MissionCard year="year" />
        <MissionCard country="country" />
        <MissionCard destination="destination" />
      </div>
    );
  }
}

export default App;
