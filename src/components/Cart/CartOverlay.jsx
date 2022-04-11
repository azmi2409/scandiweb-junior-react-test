import React, { Component } from 'react'
import { Overlay } from './CartStyle'
import MiniCart from './MiniCart'

export default class CartOverlay extends Component {
  render() {
    return (
      <Overlay>
          <MiniCart />
      </Overlay>
    )
  }
}
