import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Component.js/Home'; 
import Admin from './page.js/Dashboard.js/Admin';
import UserTable from './page.js/Dashboard.js/UserTable';
import DetailPage from './Component.js/details';
import AuthPage from './Component.js/login-signup';
import AboutUs from './Component.js/AboutUs';
import Header from './Component.js/Header';
import Footer from './Component.js/Footer';

import './App.css';




function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/UserTable" element={<UserTable />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/authPage" element={<AuthPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<UserTable />} />
          <Route path="/detailPage" element={<DetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
