import React from 'react'
import { Link } from 'gatsby'


const Header = () => (
  <header className='header-main'>
    <div className='container'>
      <Link to="/" className="logo">Amore</Link>

      <nav className="menu">
        <Link to="/respeitar" className="menu-link button-text">Respeitar</Link>
        <Link to="/cuidar" className="menu-link button-text">Cuidar</Link>
        <Link to="/proteger" className="menu-link button-text">Proteger</Link>
      </nav>

      <button className="button-drawer trigger"></button>

      <div className="menu-drawer">
        <nav className="links">
          <Link to="/respeitar" className="button-text">Respeitar</Link>
          <Link to="/cuidar" className="button-text">Cuidar</Link>
          <Link to="/proteger" className="button-text">Proteger</Link>
        </nav>
      </div>
    </div>
  </header>
)

export default Header