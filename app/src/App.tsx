import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<h1>Welcome to Hive2Work</h1>} />
            </Routes>
        </Router>
    );
}

export default App;