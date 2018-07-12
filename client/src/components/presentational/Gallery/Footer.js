import React from 'react'

const Footer = props => {
  return (
    <h3 className='subtitulo--seccion' onClick={props.resetGallery}>
      {''} {props.children}
    </h3>
  )
}

export default Footer
