import React, { Component } from 'react'
import Nav from '../Nav'
import ContactHeaderImg from '../../../assets/img/caracontacto.png'
import SocialContainer from './Social'

export default class Contact extends Component {
  render () {
    return (
      <section className='contact-grid__container'>
        <Nav />
        <div className='contact-container'>
          <img src={ContactHeaderImg} className='contact__img-title' alt='' />
          <p className='contact__title'>
            Esa idea que tenés para que tu Candy sea único nosotras la hacemos realidad con dedicación, atención al detalle, calidad, y mucho
            {' '} <i className='fa fa-heart texto-rosa' />
          </p>
          <SocialContainer />
        </div>
      </section>
    )
  }
}
