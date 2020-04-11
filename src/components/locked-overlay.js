import React, { Component } from 'react'
import Button from './button'


const LockedOverlay = () => (
  <div className="locked flex-center">
    <div className="content flex-center">
      <p className="title body-super">Informamos que os nossos serviços se encontram suspensos.</p>
      <p className="description body-small">Caso necessite de algum esclarecimento, por favor entre em contacto connosco.</p>
      
      <Button to="https://m.me/a.amorempatia" external="true" type="button-light" variant="messenger">Enviar Mensagem</Button>
    </div>
  </div>
)

export default LockedOverlay