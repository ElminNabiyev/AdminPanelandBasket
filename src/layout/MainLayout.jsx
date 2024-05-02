import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../pages/Main/MainNavbar/MainNavbar'

function MainLayout() {
  return (
    <>
      <MainNavbar></MainNavbar>
      <Outlet></Outlet>
    </>
  )
}

export default MainLayout
