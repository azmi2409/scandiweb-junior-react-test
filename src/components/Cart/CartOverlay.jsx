import React, { Component } from 'react'
import { Overlay } from './CartStyle'
import MiniCart from './MiniCart'
import OutsideWrapper from '../Header/OutsideWrapper'

export default class CartOverlay extends Component {
  render() {
    return (
      <Overlay>
          <OutsideWrapper action={this.props.toggleCart}>
          <MiniCart {...this.props}/>
          </OutsideWrapper>
      </Overlay>
    )
  }
}
