import React from 'react'
import LayoutMainPage from '../components/layout-main-page'
import { Link } from 'gatsby'

const Proteger = () => (
  <LayoutMainPage
    name="proteger"
    title="Proteger"
    quote="A consciência de que nenhum animal precisaria do Homem para existir ou ser feliz, é em si o princípio que os protege a todos."
  >
    <section className="main-section reabilitacao">
      <div className="container">
        <h2>Reabilitação</h2>
        <p>O teu animal não é apenas comportamento. É uma vida; um estado emocional e psicológico. Ele sofre e tem medo.</p>
        <Link to="#precario" className="button-light page-down">Consultar Preços</Link>
      </div>
    </section>
  </LayoutMainPage>
)

export default Proteger