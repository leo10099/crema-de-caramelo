import React from 'react'

const Footer = props => {
  return (
    <div onClick={props.resetGallery}>
      <h3 className='subtitulo--seccion'>
        {''} {props.children}
      </h3>
    </div>
  )
}

export default Footer
