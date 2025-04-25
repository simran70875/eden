
import React from 'react';
import './App.css';
import './responsive.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './screens/landing';
import Insights from './screens/insights';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>


  )
}


export default App;