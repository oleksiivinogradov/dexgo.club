import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SpacePioneers from './pages/SpacePioneers';
import Trailblazer from './pages/Trailblazer';
import Toptokers from './pages/Toptokers';
import Cyberwarriors from './pages/Cyberwarriors';
import Robots from './pages/Robots';
import Gameplay from './pages/Gameplay';
import Cities from './pages/Cities';
import RoutesPage from './pages/RoutesPage';
import Marketplace from './pages/Marketplace';
import PrivacyPolicySeaBattle from './pages/PrivacyPolicySeaBattle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="spacepioneers" element={<SpacePioneers />} />
          <Route path="trailblazer" element={<Trailblazer />} />
          <Route path="toptokers" element={<Toptokers />} />
          <Route path="cyberwarriors" element={<Cyberwarriors />} />
          <Route path="robots" element={<Robots />} />
          <Route path="gameplay" element={<Gameplay />} />
          <Route path="cities" element={<Cities />} />
          <Route path="routes" element={<RoutesPage />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="privacy-policy-seabattle" element={<PrivacyPolicySeaBattle />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
