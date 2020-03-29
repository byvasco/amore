import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import LayoutMainPage from '../components/layout-main-page'
import MainSectionHeader from '../components/sections/main-section-header'
import Pricing from '../components/sections/section-pricing'
import Contacts from '../components/sections/section-contacts'

const Cuidar = () => (
  <LayoutMainPage
    name="cuidar"
    title="Cuidar"
    quote="A maior violência para com um animal não humano acontece quando o tratamos como um ser humano."
  >
    <section className="main-section alojamento">
      <div className="container flex-center">
        <MainSectionHeader
          title="Alojamento"
          intro="O teu animal não é apenas comportamento. É uma vida; um estado emocional e psicológico. Ele sofre e tem medo."
          button="true"
        />

        <div className="rows">
          <div className="row grid-2">
            <div className="content">
              <p className="body-long">O nosso trabalho é compreender o medo do teu animal e ajudar a <strong>transformá-lo ou aprender a viver com ele</strong>, sem que isso o afete ou afete quem o rodeia.</p>
            </div>

            {/* <Img fixed={imageReabilitacao1} className="image" /> */}
          </div>

          <div className="row inverted grid-2">
            <div className="content">
              <p className="body-long">Queremos ajudar-te a garantir o bem-estar do teu animal e da tua família, transformando conflitos em <strong>harmonia e confiança</strong>.</p>
              <p className="body-long">Estudamos e desenvolvemos-nos de forma a estarmos atualizados com os mais recentes <strong>estudos científicos sobre comportamento, saúde e bem-estar</strong>.</p>
            </div>

            {/* <Img fixed={imageReabilitacao2} className="image" /> */}
          </div>

          <div className="row grid-2">
            <div className="content">
              <p className="body-long">Não importa o problema, idade ou a circunstância do teu animal. Não importa a tua capacidade física, idade, conhecimento ou tempo disponível.</p>
              <p className="body-long">Juntos descobriremos e construiremos o caminho que tornará o teu animal <strong>tranquilo, confiante e amável</strong>.</p>
            </div>

            {/* <Img fixed={imageReabilitacao3} className="image" /> */}
          </div>
        </div>
      </div>
    </section>
  </LayoutMainPage>
)

export default Cuidar