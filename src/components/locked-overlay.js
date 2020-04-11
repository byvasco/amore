import React, { Component } from 'react'
import Button from './button'


const LockedOverlay = () => (
  <div className="locked flex-center">
    <div className="content flex-center">
      <p className="title body-super">Os serviços prestados pela Amore encontram-se suspensos.</p>
      <p className="description body-small">Entra em contacto connosco para mais informação!</p>
      
      <Button to="https://m.me/a.amorempatia" external="true" type="button-light" variant="messenger">Enviar Mensagem</Button>
    </div>
  </div>
)

export default LockedOverlay