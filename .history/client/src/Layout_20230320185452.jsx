import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <dic>
        <Header/>
        <Outlet/>
    </dic>
  )
}

export default Layout