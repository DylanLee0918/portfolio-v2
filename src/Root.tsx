import React from 'react';
import { Home } from './pages/index';
import Navbar from './layout/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default App;
