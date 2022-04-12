import React, { Component } from "react";
import { MiniCartContainer, MiniCartHeader, MiniCartItems,MiniCartImg } from "./CartStyle";
import { mapStateToProps, mapDispatchToProps } from "../../lib/helpers";
import { connect } from "react-redux";

class MiniCart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <MiniCartContainer>
        <MiniCartHeader>
          My Bag<span style={{ fontWeight: 500 }}>{`, ${cart.length} Items`}</span>
        </MiniCartHeader>
        <MiniCartItems>
          {cart.map((item, index) => {
            return (
              <div key={index}>
                <MiniCartImg src={item.image} alt={item.name} />
                <div>
                  <span>{item.brand}</span>
                  <span>{item.name}</span>
                </div>
              </div>
            );
          })}
        </MiniCartItems>
      </MiniCartContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
