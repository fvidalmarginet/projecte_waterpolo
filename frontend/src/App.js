import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatchList from './MatchList';
import MatchDetail from './MatchDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Projecte Waterpolo</h1>
        <Routes>
          <Route path="/" element={<MatchList />} />
          <Route path="/match/:id" element={<MatchDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;