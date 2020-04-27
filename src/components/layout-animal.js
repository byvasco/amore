import React from 'react'
import SEO from './SEO'
import { Link } from 'gatsby'

const LayoutAnimal = ({ title, children }) => {
  return (
    <main className="page-animal">
      <SEO title={title} />
      <header className="header-back">
        <div className="container">
          <Link to="/proteger#adocao" className="button-text back">Voltar Atrás</Link>
          <Link to="/" className="logo">Amore</Link>
        </div>
      </header>

      {children}
    </main>
  )
}

export default LayoutAnimal