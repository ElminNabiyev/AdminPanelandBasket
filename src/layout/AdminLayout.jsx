import React from 'react'
import NavbarAdmin from '../pages/Admin/NavbarAdmin/NavbarAdmin'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <>
    <NavbarAdmin></NavbarAdmin>
    <Outlet></Outlet>
  </>
  )
}

export default AdminLayout
