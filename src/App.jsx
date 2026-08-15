import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Diensten from './pages/Diensten';
import Contact from './pages/Contact';
// import Werkplaats from './pages/Werkplaats';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="werkplaats" element={<Werkplaats />} /> */}
                    <Route path="werkplaats" element={<Navigate to="/" replace />} />
                    <Route path="diensten" element={<Diensten />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
