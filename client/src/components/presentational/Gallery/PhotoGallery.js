import React, { Component } from 'react'
import Nav from '../Nav'
import Footer from './Footer'
import ReactPhotoGallery from 'react-photo-gallery'
import { Link } from 'react-router-dom'
import { GridLoader } from 'react-spinners'
import Lightbox from 'react-images'
import Measure from 'react-measure'

export default class PhotoGallery extends Component {
  state = {
    currentImage: 0,
    width: -1
  }
  constructor () {
    super()
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }
  componentDidMount () {
    const { setCloudData, fetchTheme } = this.props
    setCloudData(fetchTheme)
    this.forceUpdate()
  }

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

  renameProp = (oldProp, newProp, { [oldProp]: old, ...others }) => ({
    [newProp]: old,
    ...others
  })

  render () {
    // Formatear los datos según las prop-types requeridas por React Photo Gallery
    const data = [...this.props.cloudData].reduce((a, b) => a.concat(b), [])
    const fotos = data.map(foto => this.renameProp('secure_url', 'src', foto))
    const width = this.state.width
    if (!this.props.cloudData[0]) {
      return (
        <section>
          <Nav
            resetGallery={this.props.resetGallery}
            currentGallery={this.props.currentGallery}
          />
          <div className='spinner'>
            <GridLoader color={'#665687'} loading={this.state.loading} />
          </div>
        </section>
      )
    } else {
      return (
        <Measure
          bounds
          onResize={contentRect =>
            this.setState({ width: contentRect.bounds.width })}
        >
          {({ measureRef }) => {
            if (width < 1) {
              return <div ref={measureRef} />
            }
            let columns = 1
            if (width >= 480) {
              columns = 2
            }
            if (width >= 1024) {
              columns = 3
            }
            return (
              <div className='image-grid__container' ref={measureRef}>
                <Nav
                  resetGallery={this.props.resetGallery}
                  currentGallery={this.props.currentGallery}
                />
                <ReactPhotoGallery
                  photos={fotos}
                  onClick={this.openLightbox}
                  columns={columns}
                />
                <Lightbox
                  images={fotos}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                />
                <Footer resetGallery={this.props.resetGallery}>
                  <i className='fa fa-caret-left' />
                  {' '}
                  <Link to='/galeria'>Volver</Link>
                </Footer>
              </div>
            )
          }}
        </Measure>
      )
    }
  }
}
