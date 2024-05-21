import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../layouts/site/Header/Header'
import Footer from '../../layouts/site/Footer/Footer'
const SiteRoot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default SiteRoot