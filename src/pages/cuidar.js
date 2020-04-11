import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import LayoutMainPage from '../components/layout-main-page'
import MainPageSectionHeader from '../components/sections/main-page--section-header'
import Pricing from '../components/sections/section-pricing'
import Contacts from '../components/sections/section-contacts'

const Cuidar = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file (relativePath: { eq: "page-sections/image-alojamento-1.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image2: file (relativePath: { eq: "page-sections/image-alojamento-2.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageAlojamento1 = data.image1.childImageSharp.fluid;
  const imageAlojamento2 = data.image2.childImageSharp.fluid;

  return (
    <LayoutMainPage
      name="cuidar"
      title="Cuidar"
      quote="A maior violência para com um animal não humano acontece quando o tratamos como um ser humano."
    >
      <section className="main-section alojamento">
        <div className="container flex-center">
          <MainPageSectionHeader
            name="alojamento"
            title="Alojamento"
            button="true"
          />

          <div className="content">
            <div className="images grid-2">
              <div className="left">
                <Img fluid={imageAlojamento1} className="image" />
              </div>
              
              <div className="right">
                <Img fluid={imageAlojamento2} className="image" />
              </div>
            </div>

            <div className="features flex-center">
              <ul className="features-list grid-2">
                <li>
                  <p>Horas de liberdade e convivência com outros animais</p>
                </li>

                <li>
                  <p>
                    Alimentação <strong>gratuita</strong>
                  </p>
                </li>

                <li>
                  <p>
                    Ambiente rural e tranquilo
                  </p>
                </li>

                <li>
                  <p>
                   Alojamento <strong>sem boxes</strong>
                  </p>
                </li>

                <li>
                  <p>
                    Acompanhamento <strong>24 Horas</strong>
                  </p>
                </li>

                <li>
                  <p>
                    <strong>6 hectares</strong> de natureza bruta
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    
      <Pricing
        intro="Se precisares de estadia <strong>superior a 30 noites</strong> ou tens uma situação diferente entra em contacto e chegaremos à melhor solução para ti!"
      >
        <div className="plans grid-3">
          <div className="plan plan-left">
            <div className="main">
              <p className="body-bold">Valor Normal</p>
              <p className="value title-5">20€</p>
            </div>

            <div className="secondary">
              <p className="body-small">2º cão</p>
              <p className="value title-6">10€</p>
            </div>

            <div className="secondary">
              <p className="body-small">A partir do 3° cão</p>
              <p className="value title-6">5€</p>
            </div>

            <p className="label text-lighter">Valor por Dia</p>
          </div>

          <div className="plan plan-middle">
            <div className="main">
              <p className="body-bold">Adotado</p>
              <p className="value title-5">19€</p>
            </div>

            <div className="secondary">
              <p className="body-small">2º cão</p>
              <p className="value title-6">9€</p>
            </div>

            <div className="secondary">
              <p className="body-small">A partir do 3° cão</p>
              <p className="value title-6">4,5€</p>
            </div>

            <p className="label text-lighter">Valor por Dia</p>
          </div>
        
          <div className="plan plan-right">
            <div className="main">
              <p className="body-bold">Adotado à Amore/UPPA</p>
              <p className="value title-5">16€</p>
            </div>

            <div className="secondary">
              <p className="body-small">2º cão</p>
              <p className="value title-6">8€</p>
            </div>

            <div className="secondary">
              <p className="body-small">A partir do 3° cão</p>
              <p className="value title-6">4€</p>
            </div>

            <p className="label text-lighter">Valor por Dia</p>
          </div>
        </div>
      
        <a href="https://m.me/a.amorempatia" className="cta button-dark messenger">Fazer Marcação</a>

        <p className="note body-small">Visita de avaliação <strong>obrigatória e gratuita</strong> para a 1ª estadia de alojamento.</p>
      </Pricing>

      <Contacts />
    </LayoutMainPage>
  )
}

export default Cuidar