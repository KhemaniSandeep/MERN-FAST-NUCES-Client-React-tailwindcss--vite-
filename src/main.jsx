
// main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './index.css'
import UserRole from './UserRole/index.jsx'
import Navigation from './pages/Navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>  
      {/* <Navigation /> */}
      <App/>
      {/* <UserRole/> */}
    </>
)