import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;