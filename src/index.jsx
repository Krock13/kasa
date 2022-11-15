import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
    <StrictMode>
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    </StrictMode>,
    document.getElementById('root'),
)
