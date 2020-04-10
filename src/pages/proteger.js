import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import LayoutMainPage from '../components/layout-main-page'
import MainPageSectionHeader from '../components/sections/main-page--section-header'
import Button from '../components/button'

const Proteger = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file (relativePath: { eq: "page-sections/image-santuario-1.png" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image2: file (relativePath: { eq: "page-sections/image-santuario-2.png" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image3: file (relativePath: { eq: "page-sections/image-santuario-3.png" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image4: file (relativePath: { eq: "page-sections/image-santuario-4.png" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image5: file (relativePath: { eq: "page-sections/image-hopeful-1.png" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      adoption: allFile (filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "adoption"}}) {
        edges {
          node {
            childImageSharp {
              fluid (maxWidth: 220, maxHeight: 220, quality: 100) {
                originalName
                aspectRatio
                base64
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `)


  const imageSantuario1 = data.image1.childImageSharp.fluid;
  const imageSantuario2 = data.image2.childImageSharp.fluid;
  const imageSantuario3 = data.image3.childImageSharp.fluid;
  const imageSantuario4 = data.image4.childImageSharp.fluid;
  const imageHopeful1 = data.image5.childImageSharp.fluid;
  const imagesAdoption = data.adoption.edges;

  return (
    <LayoutMainPage
      name="proteger"
      title="Proteger"
      quote="A consciência de que nenhum animal precisaria do Homem para existir ou ser feliz, é em si o princípio que os protege a todos."
    >
      <section className="main-section santuario">
        <div className="container">
          <MainPageSectionHeader
            name="santuario"
            title="Santuário Empatia"
            intro="Esta é a casa de uma família sem diferenças. Sem preconceitos. Sem rancor."
            button="false"
          />

          <div className="rows">
            <div className="row grid-2">
              <div className="left flex-center">
                <Img fluid={imageSantuario1} className="image" />
              </div>
              
              <div className="right flex-center">
                <Img fluid={imageSantuario2} className="image" />
                <p className="body-long">Aqui todos são iguais, com histórias de vida diferentes. Em comum, todos tiveram a experiência do mau trato, do medo, do frio, da dor e do desrespeito do Homem.</p>
              </div>
            </div>
          
            <div className="row row-quote flex-center">
              <p className="quote">Aqui encontraram um porto seguro, onde podem finalmente descansar, viver em paz e liberdade.</p>
            </div>

            <div className="row grid-2">
              <Img fluid={imageSantuario3} className="image" />
              <Img fluid={imageSantuario4} className="image" />
            </div>

            <div className="row flex-center">
              <div className="content">
                <p className="body-long">Todos os animais foram resgatados de situações de negligência, abandono, maus tratos ou de eminência de abate para consumo humano.</p>
                <p className="body-long">O santuário <strong>não é aberto a visitas</strong> de forma a salvaguardarmos a tranquilidade e segurança de todos os animais.</p>

                <div className="note">
                  <p className="body-small text-light">Os custos e o trabalho inerentes ao cuidado e proteção dos animais são suportados pela equipa e pelos serviços prestados pela Amore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-section hopeful">
        <div className="container">
          <MainPageSectionHeader
            name="hopeful"
            title="Projecto Hopeful"
            intro="Projeto integrado da Amore onde abraçamos a missão de <strong>potenciar e garantir o sucesso da adoção de animais resgatados</strong> e protegido por nós ou ao abrigo de associações e centros de recolha oficiais."
            button="true"
            buttonText="Animais para Adoção"
            buttonHash="adocao"
          />

          <div className="row flex-center">
            <Img fluid={imageHopeful1} className="image" />
          </div>

          <div className="row flex-center">
            <ul className="service-items">
              <li>
                <p className="body-long">Formamos tratadores e voluntários de proteção animal em comportamento, saúde e bem-estar.</p>
              </li>

              <li>
                <p className="body-long">Desenvolvemos e implementamos protocolos e estratégias adequadas de integração de novos cães; maneio, organização de cães e de boxes, reforçar comportamentos favoráveis, visitas de adotantes, integração na nova casa, tratamento de devoluções, e melhoramento de infrastruturas/enriquecimento ambiental.</p>
              </li>

              <li>
                <p className="body-long">Promovemos ações de sensibilização e educação sobre bem-estar, comportamento e proteção animal junto das comunidades, entidades escolares e centros sociais. </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="adoption" id="adocao">
        <div className="container flex-center">
          <h2 className="section-title title-adocao">Para Adoção</h2>

          <div className="animals-list grid-4">
            {imagesAdoption.map( ({ node }, i) => {
              let animalName = node.childImageSharp.fluid.originalName;
              animalName = animalName.substring(0, animalName.indexOf('.'));

              return(
                <a href="amorempatia.org" className={`animal ${animalName}`}>
                  <Img fluid={node.childImageSharp.fluid} key={i} className="animal-image" />
                  <p className="animal-name subtitle-small">{animalName}</p>
                </a>
              )
            })}
          </div>
        
          <div className="contact flex-center">
            <h3 className="section-title title-adocao-contact">Para Adoção</h3>
            <p className="content body-large">Contacta-nos para marcar uma visita e conhecer os nossos meninos!</p>
            <Button to="https://m.me/a.amorempatia" external="true" variant="messenger">Enviar Mensagem</Button>
          </div>
        </div>
      </section>
    </LayoutMainPage>
  )
}

export default Proteger