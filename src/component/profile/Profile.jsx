import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {Outlet} from "react-router-dom"

const Profile = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default Profile