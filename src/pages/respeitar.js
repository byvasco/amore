import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import LayoutMainPage from '../components/layout-main-page'
import MainPageSectionHeader from '../components/sections/main-page--section-header'
import Pricing from '../components/sections/section-pricing'
import Contacts from '../components/sections/section-contacts'

const Respeitar = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file (relativePath: { eq: "page-sections/image-reabilitacao-1.png" }) {
        childImageSharp {
          fixed (width: 708, height: 432, quality: 100) {
            aspectRatio
            base64
            width
            height
            src
            srcSet
          }
        }
      }

      image2: file (relativePath: { eq: "page-sections/image-reabilitacao-2.png" }) {
        childImageSharp {
          fixed (width: 630, height: 402, quality: 100) {
            aspectRatio
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      
      image3: file (relativePath: { eq: "page-sections/image-reabilitacao-3.png" }) {
        childImageSharp {
          fixed (width: 516, height: 320, quality: 100) {
            aspectRatio
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `);
  
  const imageReabilitacao1 = data.image1.childImageSharp.fixed;
  const imageReabilitacao2 = data.image2.childImageSharp.fixed;
  const imageReabilitacao3 = data.image3.childImageSharp.fixed;
  

  return (
    <LayoutMainPage
      name="respeitar"
      title="Respeitar"
      quote="A maior arrogância de alguns Homens, está na crença de que sabem mais sobre os outros animais, do que eles próprios."
    >
      <section className="main-section reabilitacao">
        <div className="container flex-center">
          <MainPageSectionHeader
            name="reabilitacao"
            title="Reabilitação"
            intro="O teu animal não é apenas comportamento. É uma vida; um estado emocional e psicológico. Ele sofre e tem medo."
            button="true"
          />

          <div className="rows">
            <div className="row grid-2">
              <div className="content">
                <p className="body-long">O nosso trabalho é compreender o medo do teu animal e ajudar a <strong>transformá-lo ou aprender a viver com ele</strong>, sem que isso o afete ou afete quem o rodeia.</p>
              </div>

              <Img fixed={imageReabilitacao1} className="image" />
            </div>

            <div className="row inverted grid-2">
              <div className="content">
                <p className="body-long">Queremos ajudar-te a garantir o bem-estar do teu animal e da tua família, transformando conflitos em <strong>harmonia e confiança</strong>.</p>
                <p className="body-long">Estudamos e desenvolvemos-nos de forma a estarmos atualizados com os mais recentes <strong>estudos científicos sobre comportamento, saúde e bem-estar</strong>.</p>
              </div>

              <Img fixed={imageReabilitacao2} className="image" />
            </div>

            <div className="row grid-2">
              <div className="content">
                <p className="body-long">Não importa o problema, idade ou a circunstância do teu animal. Não importa a tua capacidade física, idade, conhecimento ou tempo disponível.</p>
                <p className="body-long">Juntos descobriremos e construiremos o caminho que tornará o teu animal <strong>tranquilo, confiante e amável</strong>.</p>
              </div>

              <Img fixed={imageReabilitacao3} className="image" />
            </div>
          </div>
        </div>
      </section>
    
      <Pricing>
        <div className="plans grid-2">
          <div className="plan plan-left">
            <header className="plan-header">
              <h3 className="plan-name subtitle-bold">Consultas de Avaliação</h3>
            </header>

            <ul className="plan-tiers">
              <li>
                <p>Valor Normal</p>
                <p className="title-6">60€</p>
              </li>

              <li>
                <p>Cães adotados</p>
                <p className="title-6">50€</p>
              </li>

              <li>
                <p>Cães adotados à UPPA</p>
                <p className="title-6">40€</p>
              </li>
            </ul>
          </div>

          <div className="plan plan-right">
            <header className="plan-header">
              <h3 className="plan-name subtitle-bold">Protocolos de Reabilitação</h3>
              <p className="label text-lighter">Valor por Dia</p>
            </header>

            <ul className="plan-tiers">
              <li>
                <div className="main">
                  <p className="body-bold">Valor Normal</p>
                  <p className="value title-6">25€</p>
                </div>

                <div className="secondary">
                  <p className="body-small">Quando superior a 30 dias</p>
                  <p className="value title-6">22€</p>
                </div>
              </li>
            
              <li>
                <div className="main">
                  <p className="body-bold">Cães adotados</p>
                  <p className="value title-6">20€</p>
                </div>

                <div className="secondary">
                  <p className="body-small">Quando superior a 30 dias</p>
                  <p className="value title-6">18€</p>
                </div>
              </li>

              <li>
                <div className="main">
                  <p className="body-bold">Cães adotados à UPPA</p>
                  <p className="value title-6">18€</p>
                </div>

                <div className="secondary">
                  <p className="body-small">Quando superior a 30 dias</p>
                  <p className="value title-6">16€</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <a href="https://m.me/a.amorempatia" className="button-dark messenger">Fazer Marcação</a>
      </Pricing>

      <Contacts />
    </LayoutMainPage>
  )
}

export default Respeitar