import React from 'react'

const Pricing = ({ intro, children }) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(intro, 'text/html')

  console.log(doc.body);
  
  return (
    <section className="pricing" id="precario">
      <div className="container flex-center">
        <header className="section-header flex-center">
          <h2 className="title title-pricing">Preçário</h2>
          {intro ? <p className="intro body-large" dangerouslySetInnerHTML={{ __html: intro }}></p> : ''}
        </header>

        {children}
      </div>
    </section>
  )
}

export default Pricing;