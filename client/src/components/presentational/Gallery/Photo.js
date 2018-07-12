import React, { Component } from 'react'

export default class Photo extends Component {
  render () {
    const { src, i } = this.props
    return (
      <a href={'./themes/' + src} key={i}>
        <img alt='' src={'./themes/' + src} />
      </a>
    )
  }
}
