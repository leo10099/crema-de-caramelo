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
        <div className='social-phone'>
          <i className='fa fa-phone' />
          {' '}
          11 - 6247 - 0115/
          {' '}
          <br />
          {' '}
          11-6248-5589
        </div>
        <div className='social-email'>
          <a href='mailto:cremadecaramelo17@gmail.com'>
            <i className='fa fa-envelope' />{' '}cremadecaramelo17@gmail.com
          </a>
        </div>
        <div className='contact__button-panel'>
          <ContactButton className='mobile-only' onClick={this.sendWhatsapp}>
            Mensajeanos por {' '}
            <i className='fab fa-whatsapp texto-verde' />{' '}
          </ContactButton>
          <ContactButton onClick={this.goToFb}>
            Más sobre nosotras en {' '}
            <i className='fab fa-facebook-f texto-verde' />
          </ContactButton>
        </div>
      </section>
    )
  }
}
