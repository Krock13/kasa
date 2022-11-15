import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Lodging from './pages/Lodging/lodging'
import About from './pages/About/about'
import Footer from './components/Footer/footer'
import Error from './components/Error/error'
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
    <StrictMode>
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/lodging' element={<Lodging />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </StrictMode>,
    document.getElementById('root'),
)
