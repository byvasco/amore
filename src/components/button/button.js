import React from 'react'
import { Link } from 'gatsby'


const Button = ({ to, type, variant, external, children}) => {

  if (!external) {
    return (
      <Link to={to} className={(type ? type : 'button-dark') + (variant ? ` ${variant}` : '')}>
        {children}
      </Link>
    )
  }
}

export default Button