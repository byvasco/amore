import React from 'react'
import { Link } from 'gatsby'


const Button = ({ to, type, customClass, variant, external, children}) => {
  if (external !== 'true') {
    return (
      <Link to={to} className={(type ? type : 'button-dark') + (variant ? ` ${variant}` : '')}>
        {children}
      </Link>
    )
  } else {
    return (
      <a href={to} className={(customClass ? `${customClass} ` : '') + (type ? type : 'button-dark') + (variant ? ` ${variant}` : '')}>
        {children}
      </a>
    )
  }
}

export default Button