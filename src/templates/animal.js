import React from 'react'
import LayoutAnimal from '../components/layout-animal'
import { graphql } from 'gatsby'
import Button from '../components/button'

export const pageQuery = graphql`
  query (
    $title: String!
  ) {
    markdownRemark (
      frontmatter: {
        title: {
          eq: $title
        }
      }
    ) {
      frontmatter {
        title,
        race,
        age,
        sex,
        size,
        fur,
        sterilised,
        vaccines,
        dewormed
      }
      html
    }
  }
`

const Animal = ({ data }) => {
  const { markdownRemark: animal } = data
  
  return (
    <LayoutAnimal name={animal.frontmatter.title}>
      <section className="hero flex-center">
        <p>Gallery Here</p>

        {animal.frontmatter.title}
      </section>

      <section className="content">
        <div className="container-small">
          <div className="article-content" dangerouslySetInnerHTML={{ __html: animal.html }}></div>

          <aside className="details">
            <div className="item">
              <p className="key caption-1">Raça</p>
              <p className="value body-small">{animal.frontmatter.race}</p>
            </div>

            <div className="item">
              <p className="key caption-1">Idade</p>
              <p className="value body-small">{animal.frontmatter.age}</p>
            </div>

            <div className="item">
              <p className="key caption-1">Sexo</p>
              <p className="value body-small">{animal.frontmatter.sex}</p>
            </div>

            <div className="item">
              <p className="key caption-1">Porte</p>
              <p className="value body-small">{animal.frontmatter.size}</p>
            </div>

            <div className="item">
              <p className="key caption-1">Pêlo</p>
              <p className="value body-small">{animal.frontmatter.fur}</p>
            </div>

            <ul className="medical-details">
              <li className={`item ${animal.frontmatter.sterilised ? 'true' : ''}`}>
                <p className="body-smaller">Esterilizado</p>
              </li>

              <li className={`item ${animal.frontmatter.vaccines ? 'true' : ''}`}>
                <p className="body-smaller">Vacinas em dia</p>
              </li>

              <li className={`item ${animal.frontmatter.dewormed ? 'true' : ''}`}>
                <p className="body-smaller">Desparasitado</p>
              </li>
            </ul>
          </aside>
          
          <Button to="https://m.me/a.amorempatia" external="true" variant="messenger">
            Quero adotar {animal.frontmatter.sex.toLowerCase() === 'macho' ? 'o' : 'a'} {animal.frontmatter.title}
          </Button>

          <div className="conclusion">
            <p>Ao adoptares um dos animais protegidos por nós, terás <strong>acompanhamento telefónico e/ou presencial totalmente gratuito durante os primeiros 3 meses</strong> para qualquer avaliação ou tratamento de problemas de comportamento e aconselhamento sobre saúde, alimentação e bem-estar.</p>

            <p>Terás também <strong>30 noites de alojamento gratuitas</strong> a usar ao longo da vida do animal, assim como um valor/noite mais baixo para outras estadias que possas precisar que fiquemos com o mais recente membro da tua família.</p>
          </div>
        </div>
      </section>
    </LayoutAnimal>
  )
}

export default Animal