import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Lodging from './pages/Lodging/lodging';
import About from './pages/About/about';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Error from './components/Error/error';

import './utils/style/globalStyle.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/lodging' element={<Lodging />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </StrictMode>,
);
