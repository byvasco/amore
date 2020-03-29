import React from 'react'

const Pricing = ({ intro, children }) => {
  return (
    <section className="precario" id="precario">
      <div className="container flex-center">
        <header className="section-header">
          <h2 className="title title-pricing">Preçário</h2>
          {intro ? intro : ''}
        </header>

        {children}
      </div>
    </section>
  )
}

export default Pricing;