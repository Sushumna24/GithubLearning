import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import Greets from './Greet';
import EventHandlersDemo from './eventHandler';

const Dash = () => {
  return (
    <Router>
      <div className="dashboard-container">
        <div className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li><Link to="/page11">Home</Link></li>
            <li><Link to="/page22">Profile</Link></li>
            <li><Link to="/page33">Settings</Link></li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/page11" element={<Form />} />
            <Route path="/page22" element={<Greets />} />
            <Route path="/page33" element={<EventHandlersDemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dash;
