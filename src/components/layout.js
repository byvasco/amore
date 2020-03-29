import React from 'react'
import '../styles/main.scss'
import Header from './header'
import Footer from './footer'

const Layout = props => {
  let className = props.name ? `page-${props.name}` : ''
  className += props.type ?  ` page-${props.type}` : ''
  
  return (
    <main className={className}>
      <Header />
      {props.children}
      <Footer />
    </main>
  )
}

export default Layout