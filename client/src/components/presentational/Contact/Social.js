import React, { Component } from 'react'
import ContactButton from '../../ui-elements/contactButton'
import { Link } from 'react-router-dom'

export default class Social extends Component {
  goToFb () {
    window.open('https://www.facebook.com/cremadecaramelocandybar')
  }
  render () {
    return (
      <section className='social-container'>
        <div className='contact__button-panel'>
          <ContactButton onClick={this.goToFb}>
            Enterate más sobre nosotras en {' '}
            <i className='fab fa-facebook-f' />
          </ContactButton>
          <ContactButton>
            Mensajeanos por {' '}
            <i className='fab fa-whatsapp' />
          </ContactButton>
        </div>
      </section>
    )
  }
}
