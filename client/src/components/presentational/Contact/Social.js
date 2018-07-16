import React, { Component } from 'react'

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
      <div>
        <section className='social-container'>
          <div className='contact__button-panel'>
            <button>
              Mirá más fotos en {' '} <i className='fab fa-instagram' />
            </button>
            <button>
              Enterate más sobre nosotras en {' '}
              <i className='fab fa-facebook' />
            </button>
            <button onClick={this.toggleDisplayPhoneNumbers}>
              Contactanos por {' '}
              <i className='fab fa-whatsapp' />
            </button>
          </div>
          {this.state.displayPhoneNumbers
            ? <div>
                Cristina: 11 - 6247 - 0115
                {' '}
              <a href='/' className='fa fa-address-book' />
            </div>
            : null}
        </section>
      </div>
    )
  }
}
