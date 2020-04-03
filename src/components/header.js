import React, { Component } from 'react'
import { Link } from 'gatsby'


class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      drawerOpen: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      drawerOpen: !prevState.drawerOpen
    }));    
  }

  render() {
    return (
      <header className={this.props.type === 'drawer' ? 'header-main drawer' : 'header-main'}>
        <div className="container">
          <Link to="/" className="logo">Amore</Link>
  
          <nav className="menu">
            <Link to="/respeitar/" activeClassName="active" className="menu-link button-text">Respeitar</Link>
            <Link to="/cuidar/" activeClassName="active" className="menu-link button-text">Cuidar</Link>
            <Link to="/proteger/" activeClassName="active" className="menu-link button-text">Proteger</Link>
          </nav>
  
          <div className={this.state.drawerOpen ? 'menu-drawer open' : 'menu-drawer'}>
            <button className={this.state.drawerOpen ? 'button-drawer open' : 'button-drawer'} onClick={this.handleClick}></button>
  
            <nav className="links">
              <Link to="/respeitar/" className="respeitar link flex-center"><p className="title title-respeitar-white">Respeitar</p></Link>
              <Link to="/cuidar/" className="cuidar link flex-center"><p className="title title-cuidar-white">Cuidar</p></Link>
              <Link to="/proteger/" className="proteger link flex-center"><p className="title title-proteger-white">Proteger</p></Link>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Header