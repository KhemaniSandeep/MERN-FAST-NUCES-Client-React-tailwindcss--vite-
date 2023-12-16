
//User Role index.jsx

import React, { useContext } from 'react'
import { GlobalContext } from '../Context/context'

import Admin from '../Admin/index';
import Guest from '../Guest/index';
import User from '../User/index';

export default function UserRole() {
  
    const {user}=useContext(GlobalContext)

    const Roles={
        'Admin': Admin,
        'User': User,
        'Guest': Guest,
    }

    const contextRoles=(id)=>Roles[id] || Roles['Guest']
    const CurrentUser = contextRoles(user?.Roles)
  return (
    <>
    <CurrentUser/>
    </>
  )
}
