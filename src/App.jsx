
// App.jsx

import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navigation from './pages/Navigation.jsx'

import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';

import Admin from './Admin/index.jsx';
import Guest from './Guest/index.jsx';
import User from './User/index.jsx';

import UserRole from './UserRole/index.jsx';
import Login from './Guest/Login.jsx';
import SignUp from './Guest/Signup.jsx';


export default function App() {

  // login and signup authetication
  const [authMode, setAuthMode] = useState('login'); 

  const handleSwitchAuthMode = (mode) => {
    setAuthMode(mode);
  };
  return (
    // <>
      <BrowserRouter>

        {/* <Navigation /> */}
        <Navigation onSwitchAuthMode={handleSwitchAuthMode} />
        {/* <UserRole/> */}

        <Routes>
          <Route path='/guest' element={<Guest />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/user' element={<User />} />

          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          <Route path="*" element={<Navigate to={'/'} replace='true' />} />
        </Routes>
        {/* <Login/> */}
        {/* <SignUp/> */}
        {authMode === 'login' && <Login />}
        {authMode === 'signup' && <SignUp />}
      </BrowserRouter>
      
    //</>
    );
}