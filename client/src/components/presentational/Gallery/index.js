import React, { Component } from 'react'
import Nav from '../Nav'
import Footer from './Footer'
import HeaderImg from '../../../assets/img/caragaleria.png'
import ThemeSelector from './ThemeSelector'
import axios from 'axios'
import { withRouter } from 'react-router'

import PhotoGallery from './PhotoGallery'

class Gallery extends Component {
  state = {
    themes: [
      'animalesDeLaSelva',
      'bailarina',
      'cenicienta',
      'comunion',
      'coronitas',
      'elPrincipito',
      'emoticones',
      'minnie',
      "moana",
      'peppaPig',
      'unicornio',
      "zenon"
    ],
    cloudData: {},
    showGallery: false,
    currentGallery: ''
  }

  setCurrentGallery = e => {
    e.preventDefault()
    if (e.target.id) {
      const { id: themeSelected } = e.target
      this.setState(prevState => ({
        ...prevState,
        currentGallery: themeSelected,
        showGallery: true
      }))
    } else {
      const { value: themeSelected } = e.target.attributes.name
      this.setState(prevState => ({
        ...prevState,
        currentGallery: themeSelected,
        showGallery: true
      }))
    }
  }

  resetGallery = () => {
    this.setState({
      cloudData: {},
      currentGallery: '',
      showGallery: false
    })
  }

  fetchTheme = async currentGallery => {
    let recursos = []
    let response = await axios.get(`/api/themes/${currentGallery}`)
    recursos.push(response.data.resources)

    return recursos
  }

  setCloudData = async recursos => {
    const recursosCloud = await recursos(this.state.currentGallery).then(
      response => response
    )
    this.setState({
      cloudData: recursosCloud
    })
  }

  renderThemeSelectionBlocks = () => {
    return (
      <section className='image-gallery__container'>
        <Nav {...this.props} />
        <img src={HeaderImg} alt='' className='img-title__gallery' />
        <ThemeSelector
          themes={this.state.themes}
          setCurrentGallery={this.setCurrentGallery}
        />
        <Footer>
          <i className='far fa-question-circle' />
          {' '}
          Cliqueá para ver fotos reales de nuestro trabajo
        </Footer>
      </section>
    )
  }

  renderThemeGallery() {
    return (
      <PhotoGallery
        currentGallery={this.state.currentGallery}
        setCurrentGallery={this.setCurrentGallery}
        setCloudData={this.setCloudData}
        fetchTheme={this.fetchTheme}
        cloudData={this.state.cloudData}
        resetGallery={this.resetGallery}
      />
    )
  }

  render() {
    if (this.state.showGallery) {
      return this.renderThemeGallery()
    } else {
      return this.renderThemeSelectionBlocks()
    }
  }
}

const ImageGallery = withRouter(Gallery)
export default ImageGallery
