import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ThemeSelector extends Component {
  toggleBlockOpen = e => {
    const bloque = e.target
    bloque.classList.toggle('overlay-open')
  }

  camelCaseToNormal (camelCase) {
    var result = camelCase
      .replace(/([a-z])([A-Z][a-z])/g, '$1 $2')
      .replace(/([A-Z][a-z])([A-Z])/g, '$1 $2')
      .replace(/([a-z])([A-Z]+[a-z])/g, '$1 $2')
      .replace(/([A-Z]+)([A-Z][a-z][a-z])/g, '$1 $2')
      .replace(/([a-z]+)([A-Z0-9]+)/g, '$1 $2')
    return result.charAt(0).toUpperCase() + result.slice(1)
  }

  renderThemeBlock = theme => {
    const { setCurrentGallery } = this.props
    const blockClass = `themeSelector__block ${theme}`

    return (
      <Link
        to='/galeria'
        className={blockClass}
        id={theme}
        key={theme}
        onClick={setCurrentGallery}
      >
        <div
          className='galeria__blockOverlay'
          onClick={setCurrentGallery}
          name={theme}
        >
          {this.camelCaseToNormal(theme)}
        </div>
      </Link>
    )
  }

  render () {
    const { themes } = this.props

    return (
      <section
        className='theme-selector__container'
        onMouseOver={this.toggleBlockOpen}
        onMouseOut={this.toggleBlockOpen}
      >
        {themes.map(this.renderThemeBlock)}
      </section>
    )
  }
}
