import React from 'react'
import { Link } from 'gatsby'

const MainSectionHeader = ({ title, intro, button }) => {
  return (
    <header className="section-header flex-center">
      <h2 className="title">{title}</h2>
      <p className="intro body-large">{intro}</p>
      {button == 'true' ? <Link to="/respeitar#precario" className="button-dark page-down">Consultar Preços</Link> : ''}
    </header>
  )
}

export default MainSectionHeader;