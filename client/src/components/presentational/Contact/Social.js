import React, { Component } from 'react'
import ContactButton from '../../ui-elements/contactButton'

export default class Social extends Component {
  goToFb () {
    window.open('https://www.facebook.com/cremadecaramelocandybar')
  }
  sendWhatsapp () {
    window.open('https://wa.me/5491162470115')
  }

  render () {
    return (
      <section className='social-container'>
        <div className='subtitulo--seccion'>
          <i className='fa fa-phone-square' />{' '}Teléfono: 11 - 6247 - 0115
        </div>
        <div className='contact__button-panel'>
          <ContactButton className='mobile-only' onClick={this.sendWhatsapp}>
            Mensajeanos por {' '}
            <i className='fab fa-whatsapp' />{' '}
          </ContactButton>
          <ContactButton onClick={this.goToFb}>
            Más sobre nosotras en {' '}
            <i className='fab fa-facebook-f' />
          </ContactButton>
        </div>
      </section>
    )
  }
}
