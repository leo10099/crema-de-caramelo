import React, { Component } from 'react'
import Nav from '../Nav'
import Footer from './Footer'
import ReactPhotoGallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import _ from 'lodash'

export default class PhotoGallery extends Component {
  state = {
    currentImage: 0
  }
  constructor () {
    super()
    this.state = { currentImage: 0 }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }
  componentWillMount () {
    const { setCloudData, fetchTheme } = this.props
    setCloudData(fetchTheme)
  }
  renameProp = (oldProp, newProp, { [oldProp]: old, ...others }) => ({
    [newProp]: old,
    ...others
  })
  openLightbox (event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    })
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  render () {
    const data = _.flatten(this.props.cloudData)
    // Renombrar la URL segura de Cloudinary por src, prop-name requerida por react-photo-gallery
    const fotos = data.map(datita =>
      this.renameProp('secure_url', 'src', datita)
    )
    return (
      <section className='image-grid__container'>
        <Nav />
        <ReactPhotoGallery photos={fotos} onClick={this.openLightbox} />
        <Lightbox
          images={fotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        <Footer resetGallery={this.props.resetGallery}>
          <span className='fake-link'>
            <i className='fa fa-caret-left' /> {' '} Volver
          </span>
        </Footer>
      </section>
    )
  }
}
