import React from 'react'

const Footer = props => {
  return (
    <div onClick={props.resetGallery}>
      <h3 className='gallery__subtitulo'>
        {''} {props.children}
      </h3>
    </div>
  )
}

export default Footer
