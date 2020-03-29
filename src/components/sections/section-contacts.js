import React from 'react'
import { Link } from 'gatsby'

const Contacts = () => (
  <section className="contacts">
    <div className="container flex-center">
      <h2 className="title title-contacts">Fala Connosco</h2>
      <p className="content body-large">Responder-te é uma prioridade para nós. Procuraremos fazê-lo o mais breve possível!</p>
      <a href="https://m.me/a.amorempatia" target="_blank" className="button-dark messenger">Abrir no Messenger</a>
    </div>
  </section>
)

export default Contacts;