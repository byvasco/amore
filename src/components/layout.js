import React from 'react'
import '../styles/main.scss'
import Header from './header'
import Footer from './footer'
import LockedOverlay from './locked-overlay'
import SEO from './SEO'

const Layout = ({ name, type, title, locked, children }) => {
  let className = name ? `page-${name}` : ''
  className += type ?  ` page-${type}` : ''
  
  return (
    <main className={className}>
      <div className="top-bar">
        <div className="container flex-center">
          <p className="body-small bold white">Ajudas-nos a proteger uma vida com 1€?</p>
          <a href="#" class="button-small">Quero Ajudar</a>
        </div>
      </div>

      {locked ? <LockedOverlay />: null}
      <SEO />

      {type === 'home' ? <Header type="drawer" /> : <Header />}

      {children}
      <Footer />
    </main>
  )
}

export default Layout