import React from 'react'
import Layout from './layout'

const LayoutMainPage = ({ name, title, quote, locked, children }) => {
  return (
    <Layout name={name} title={title} type="main" locked={locked}>
      <section className={"page-hero " + name}>
        <div className="hero-image"></div>
      </section>

      <header className="page-header flex-center">
        <div className="container flex-center">
          <h1 className={`page-title title-${name}`}>{title}</h1>
          <p className="page-quote quote">{quote}</p>
        </div>
      </header>

      {children}
    </Layout>
  )
}

export default LayoutMainPage