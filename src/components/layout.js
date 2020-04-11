import React from 'react'
import { Helmet } from "react-helmet"
import '../styles/main.scss'
import Header from './header'
import Footer from './footer'
import LockedOverlay from './locked-overlay'

const Layout = ({ name, type, title, locked, children }) => {
  let className = name ? `page-${name}` : ''
  className += type ?  ` page-${type}` : ''
  
  return (
    <main className={className}>
      {locked ? <LockedOverlay />: null}
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {type === 'home' ? <Header type="drawer" /> : <Header />}

      {children}
      <Footer />
    </main>
  )
}

export default Layout