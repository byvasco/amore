import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Contacts from '../components/sections/section-contacts'


const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      gallery1: file (relativePath: { eq: "page-sections/image-home-gallery-1.jpg" }) {
        childImageSharp {
          fluid (maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      gallery2: file (relativePath: { eq: "page-sections/image-home-gallery-2.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      gallery3: file (relativePath: { eq: "page-sections/image-home-gallery-3.jpg" }) {
        childImageSharp {
          fluid (maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      gallery4: file (relativePath: { eq: "page-sections/image-home-gallery-4.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      about1: file (relativePath: { eq: "page-sections/image-about-1.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      about2: file (relativePath: { eq: "page-sections/image-about-2.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      about3: file (relativePath: { eq: "page-sections/image-about-3.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const gallery1 = data.gallery1.childImageSharp.fluid;
  const gallery2 = data.gallery2.childImageSharp.fluid;
  const gallery3 = data.gallery3.childImageSharp.fluid;
  const gallery4 = data.gallery4.childImageSharp.fluid;
  const about1 = data.about1.childImageSharp.fluid;
  const about2 = data.about2.childImageSharp.fluid;
  const about3 = data.about3.childImageSharp.fluid;

  return (
    <Layout type="home" title="Amore">
      <section className="hero">
        <div className="container flex-center">
          <Link to="/" className="logo logo-white">Amore</Link>

          <h1 className="title title-home-hero">Somos amor, paciência, espaço e empatia.</h1>
          <p className="intro body-large">O que somos, usamos para que animais não humanos recuperem a tranquilidade, confiança e autonomia.</p>
          <Button to="#trabalho" type="button-light">O Nosso Trabalho</Button>
        </div>
      </section>

      <section className="work" id="trabalho">
        <div className="container flex-center">
          <div className="intro flex-center">
            <h2 className="title title-trabalho">O Nosso Trabalho</h2>
            <p className="content body-large">Consiste em identificar e proporcionar as condições adequadas a cada indivíduo, para que este seja capaz de as satisfazer da forma mais aproximada possível à sua natureza biológica e em harmonia com o ambiente que o envolve.</p>
          </div>
        
          <div className="tiles grid-3">
            <Link to="respeitar/" className="tile respeitar flex-center">
              <div className="content">
                <h2 className="title">Respeitar</h2>
                <p className="description body-large text-white">Reabilitação</p>
              </div>

              <div className="brush-hor"></div>
              <div className="brush-ver"></div>
            </Link>

            <Link to="cuidar/" className="tile cuidar flex-center">
              <div className="content">
                <h2 className="title">Cuidar</h2>
                <p className="description body-large text-white">Alojamento</p>
              </div>

              <div className="brush-hor"></div>
              <div className="brush-ver"></div>
            </Link>

            <Link to="proteger/" className="tile proteger flex-center">
              <div className="content">
                <h2 className="title">Proteger</h2>
                <p className="description body-large text-white">Santuário e Projeto Hopeful</p>
              </div>

              <div className="brush-hor"></div>
              <div className="brush-ver"></div>
            </Link>
          </div>
        
          <p className="quote">Todas as espécies nascem com necessidades e competências específicas.</p>
        </div>
      </section>
    
      <section className="gallery">
        <div className="container">
          <div className="row grid-2">
            <div className="image-wrapper"><Img fluid={gallery1} alt="Amore" /></div>
            <div className="image-wrapper"><Img fluid={gallery2} alt="Amore" /></div>
          </div>

          <div className="row grid-2">
            <div className="image-wrapper"><Img fluid={gallery3} alt="Amore" /></div>
            <div className="image-wrapper"><Img fluid={gallery4} alt="Amore" /></div>
          </div>
        </div>
      </section>
    
      <section className="about">
        <div className="container flex-center">
          <header className="section-header flex-center">
            <h2 className="title title-sobre">Sobre a Amore</h2>
            <p className="intro body-large">Somos amor, paciência, espaço e empatia. O que somos, usamos para que animais não humanos recuperem a tranquilidade, confiança e autonomia.</p>
          </header>

          <div className="rows">
            <div className="row grid-2">
              <div className="content">
                <p>A ciência é a fonte que alimenta o nosso conhecimento. É da simbiose entre esse conhecimento e as experiências diárias que provém a sabedoria que usamos todos os dias para fazer mais e melhor por cada indivíduo.</p>
              </div>

              <div className="image-wrapper"><Img fluid={about1} alt="Sobre a Amore" /></div>
            </div>

            <div className="row inverted grid-2">
              <div className="content">
                <p>O amor aproxima; o medo afasta.</p>
                <p>O amor que respeita, cuida e protege, constrói confiança, reabilita e liberta.</p>
                <p>São os sentimentos que nos movem. Sentimentos que nos ajudam a compreender cada vida e ajudá-la a ser feliz.</p>
              </div>

              <div className="image-wrapper"><Img fluid={about2} alt="Sobre a Amore" /></div>
            </div>

            <div className="row grid-2">
              <p className="quote">Ser feliz é, para nós, um estado de plenitude.</p>

              <div className="image-wrapper"><Img fluid={about3} alt="Sobre a Amore" /></div>
            </div>
          </div>
        </div>
      </section>

      <Contacts />
    </Layout>
  )
}

export default Home