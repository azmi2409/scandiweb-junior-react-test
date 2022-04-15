import React, { Component } from 'react'
import { Submit } from './ProductDisplayStyle'

export default class AddButton extends Component {
  render() {
    return (
      <>
      {this.props.inStock ? (
          <Submit onClick={() => this.props.handleAddCart}>
            Add to Cart
          </Submit>
        ) : (
          <Submit disabled>Out of Stock</Submit>
        )}
      </>
    )
  }
}
