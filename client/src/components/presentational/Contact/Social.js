import React, { Component } from 'react'
import ContactButton from '../../ui-elements/contactButton'

export default class Social extends Component {
  state = {
    displayPhoneNumber: false
  }
  toggleDisplayPhoneNumbers = () => {
    const { displayPhoneNumbers } = this.state
    this.setState({ displayPhoneNumbers: !displayPhoneNumbers })
  }
  render () {
    return (
      <section className='social-container'>
        <div className='contact__button-panel'>
          <ContactButton>
            Mirá más fotos en {' '} <i className='fab fa-instagram' />
          </ContactButton>
          <ContactButton>
            Enterate más sobre nosotras en {' '}
            <i className='fab fa-facebook' />
          </ContactButton>
          <ContactButton onClick={this.toggleDisplayPhoneNumbers}>
            Mensajeanos por {' '}
            <i className='fab fa-whatsapp' />
          </ContactButton>
        </div>
        {this.state.displayPhoneNumbers
          ? <div>
              Cristina: 11 - 6247 - 0115
              {' '}
            <a href='/' className='fa fa-address-book' />
          </div>
          : null}
      </section>
    )
  }
}
