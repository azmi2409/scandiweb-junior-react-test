import React, { Component } from 'react'
import { Gallery, MainPict, Overlay } from './ProductDisplayStyle'

export default class Hero extends Component {
  render() {
    return (
      <MainPict>
        <Gallery src={this.props.image} alt={this.props.image}/>
        {!this.props.inStock && <Overlay>Out of stock</Overlay>}
      </MainPict>
    )
  }
}
