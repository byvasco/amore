import React from 'react'
import { Link } from 'gatsby'


const Footer = () => (
  <footer className='footer-main'>
    <div className='container grid-3'>
      <nav className="menu">
        <Link to="/respeitar" className="menu-link button-text">Respeitar</Link>
        <Link to="/cuidar" className="menu-link button-text">Cuidar</Link>
        <Link to="/proteger" className="menu-link button-text">Proteger</Link>
      </nav>

      <Link to="/" className="logo">Amore</Link>

      <ul className="social">
        <li>
          <a href="https://www.facebook.com/a.amorempatia" class="button-social facebook"></a>
        </li>

        <li>
          <a href="https://www.instagram.com/a.amorempatia/" class="button-social instagram"></a>
        </li>

        <li>
          <a href="https://twitter.com/aamorempatia" class="button-social twitter"></a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer