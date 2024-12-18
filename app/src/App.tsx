import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/'>
                    <h1>Welcome to Hive2Work</h1>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;