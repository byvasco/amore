import React from 'react'
import Button from '../button/button'

const MainPageSectionHeader = ({ name, title, intro, button }) => {
  return (
    <header className="section-header flex-center">
      <h2 className={`title title-${name}`}>{title}</h2>
      <p className="intro body-large">{intro}</p>
      <Button to={`/${typeof window !== 'undefined' ? window.location.pathname : null}#precario`} variant="page-down">Consultar Preços</Button>
    </header>
  )
}

export default MainPageSectionHeader;