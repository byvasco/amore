import React from 'react'
import SEO from './SEO'
import { Link } from 'gatsby'

const LayoutAnimal = ({ title, children }) => {
  return (
    <main className="page-animal">
      <SEO title={title} />
      <header class="header-back">
        <div className="container">
          <Link to="/" className="logo">Amore</Link>
        </div>
      </header>

      {children}
    </main>
  )
}

export default LayoutAnimal