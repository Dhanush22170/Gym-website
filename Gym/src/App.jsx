import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Why from './pages/Why';
import Book from './pages/book';
import Navbar from './component/Nav';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add this root route - it will redirect to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/why' element={<Why />} />
        <Route path='/book' element={<Book />} />
        
        {/* Optional: Add a 404 catch-all route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;