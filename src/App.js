import React from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppAbout from './Pages/AppAbout.js';
import AppHome from './Pages/AppHome.js';
import AppLogin from './Pages/AppLogin.js';

function App(){
    return (
    <div className='App'>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<AppHome/>} />
                <Route path='/about' element={<AppAbout/>} />
                <Route path='/login' element={<AppLogin/>} />
            </Routes>
            <Footer/>
        </Router>
    </div>)
}

export default App