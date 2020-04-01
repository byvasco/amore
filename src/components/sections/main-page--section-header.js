import React from 'react'
import Button from '../button'

const MainPageSectionHeader = ({ name, title, intro, button, buttonText, buttonHash }) => {
  return (
    <header className="section-header flex-center">
      <h2 className={`title title-${name}`}>{title}</h2>
      {intro ? <p className="intro body-large" dangerouslySetInnerHTML={{ __html: intro }}></p> : ''}
      
      {button !== 'false' ?
        <Button to={typeof window !== 'undefined' ? `${window.location.pathname}/${buttonHash !== undefined ? `#${buttonHash}` : '#precario'}` : null} variant="page-down">{buttonText !== undefined ? buttonText : 'Consultar Preços'}</Button>
        : null}
    </header>
  )
}

export default MainPageSectionHeader;