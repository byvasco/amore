import React from 'react'
import { Link } from 'gatsby'


const HeaderMinimal = () => (
  <header className='header-main floating'>
    <div className='container'>
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

export default HeaderMinimal