import React from 'react'
// import { Link } from 'gatsby'
import Button from '../button/button'

const MainPageSectionHeader = ({ name, title, intro, button }) => {
  return (
    <header className="section-header flex-center">
      <h2 className={`title title-${name}`}>{title}</h2>
      <p className="intro body-large">{intro}</p>
      {/* {button === 'true' ? <Link to={`/${window.location.pathname}#precario`} className="button-dark page-down">Consultar Preços</Link> : ''} */}
      <Button to={`/${window.location.pathname}#precario`} variant="page-down">Consultar Preços</Button>
    </header>
  )
}

export default MainPageSectionHeader;