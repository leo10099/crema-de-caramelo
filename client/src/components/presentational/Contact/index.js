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
            Para que tu Candy sea <span className='texto-verde'>único</span> hacemos realidad tu idea con con dedicación, atención al detalle, calidad, y mucho
            <span className='texto-verde'> {' '} <i className='fa fa-heart texto-verde' /></span>
          </p>
          <SocialContainer />
        </div>
      </section>
    )
  }
}
