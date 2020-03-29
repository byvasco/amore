import React from 'react'
import Layout from './layout'

const LayoutMainPage = ({ name, title, quote, children }) => {
  return (
    <Layout name={name} type="main">
      <section className={"page-hero " + name}>
        <div className="hero-image"></div>
      </section>

      <header className="page-header flex-center">
        <div className="container flex-center">
          <h1 className="page-title">{title}</h1>
          <p className="page-quote quote-bold">{quote}</p>
        </div>
      </header>

      {children}
    </Layout>
  )
}

export default LayoutMainPage