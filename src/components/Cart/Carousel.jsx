import React, { Component } from "react";
import { CartImg, CartFigure, LeftPointer, RightPointer } from "./CartStyle";
import Left from "../../assets/Left.svg";
import Right from "../../assets/Right.svg";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  maxIndex = this.props.image.length - 1;

  handleIncrease = () => {
    const { activeIndex } = this.state;
    if (activeIndex < this.maxIndex) {
      this.setState({ activeIndex: activeIndex + 1 });
    }
  };
  handleDecrease = () => {
    const { activeIndex } = this.state;
    if (activeIndex > 0) {
      this.setState({ activeIndex: activeIndex - 1 });
    }
  };
  render() {
    const { image } = this.props;
    const { activeIndex } = this.state;
    return (
      <CartFigure>
        <CartImg src={image[activeIndex]} alt={image} />
        {this.state.activeIndex !== 0 && (
          <RightPointer onClick={this.handleDecrease}>
            <img src={Left} alt="left" />
          </RightPointer>
        )}
        {this.state.activeIndex !== this.maxIndex && (
          <LeftPointer onClick={this.handleIncrease}>
            <img src={Right} alt="right" />
          </LeftPointer>
        )}
      </CartFigure>
    );
  }
}
