import React from 'react'
import navLogo from '../../assets/img/logo-nav.png'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  galeria = React.createRef()
  contacto = React.createRef()
  burger = React.createRef()

  state = {
    burger: 'nav-burger',
    galeria: 'nav-item',
    contacto: 'nav-item'
  }
  /*
  componentWillReceiveProps = () => {
    if (this.props.match !== undefined) {
      if (this.props.match.path === '/galeria') {
        this.setState(prevState => ({
          ...prevState,
          galeria: 'nav-item__active'
        }))
      }
      if (this.props.match.path === '/contacto') {
        this.setState(prevState => ({
          ...prevState,
          contacto: 'nav-item__active'
        }))
      }
    }
  } */

  toggleBurgerOpen = () => {
    this.state.burger === 'nav-burger'
      ? this.setState(prevState => ({
        ...prevState,
        burger: 'nav-burger open',
        galeria: 'nav-item open',
        contacto: 'nav-item open'
      }))
      : this.setState(prevState => ({
        ...prevState,
        burger: 'nav-burger',
        galeria: 'nav-item',
        contacto: 'nav-item'
      }))
  }
  render () {
    return (
      <nav className='nav-container'>
        <div className='logo-burger-container'>
          <Link to='/'>
            <img src={navLogo} alt='Crema de Caramelo' className='logo-nav' />
          </Link>
          <div className={this.state.burger} onClick={this.toggleBurgerOpen}>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <Link to='/galeria' className={this.state.galeria} ref={this.galeria}>
          <i className='fa fa-camera' /> &nbsp; Galería de Imágenes
        </Link>
        <Link
          to='/contacto'
          className={this.state.contacto}
          ref={this.contacto}
        >
          <i className='fa fa-envelope' /> &nbsp; Contacto
        </Link>
      </nav>
    )
  }
}

export default Nav
