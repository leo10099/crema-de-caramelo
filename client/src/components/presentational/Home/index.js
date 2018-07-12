import React, { Component } from 'react'
import Nav from '../Nav'
import Card from './Card'
import Description from './Description'

export default class Home extends Component {
  render () {
    return (
      <div className='home-container'>
        <Nav />
        <Card />
        <Description />
      </div>
    )
  }
}
