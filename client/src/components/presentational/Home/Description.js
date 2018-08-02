import React from 'react'
import MainButton from '../../ui-elements/mainButton'
import { Link } from 'react-router-dom'

const Description = () => {
  return (
    <section className='description-container'>
      <p className='titulo'>
        Mesa de
        {' '}
        <span className='texto-verde'> golosinas </span>
        personalizadas
        {' '}
      </p>
      <Link to='/contacto'>
        <MainButton>
          <i className='fa fa-heart' />
          &nbsp;Quiero mi Candybar &nbsp;
          <i className='fa fa-heart' />
        </MainButton>
      </Link>

    </section>
  )
}

export default Description