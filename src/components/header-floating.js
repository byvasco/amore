import React from 'react'
import { Link } from 'gatsby'


const HeaderMinimal = () => (
  <header className='header-main'>
    <div className="menu-drawer">
      <button className="button-drawer trigger"></button>

      <nav className="links">
        <Link to="/respeitar" className="respeitar link flex-center"><p className="title title-respeitar-white">Respeitar</p></Link>
        <Link to="/cuidar" className="cuidar link flex-center"><p className="title title-cuidar-white">Cuidar</p></Link>
        <Link to="/proteger" className="proteger link flex-center"><p className="title title-proteger-white">Proteger</p></Link>
      </nav>
    </div>
  </header>
)

export default HeaderMinimal