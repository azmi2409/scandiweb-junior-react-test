import { Component } from "react";
import {
  MiniCartContainer,
  MiniCartHeader,
  MiniCartItems,
  MiniCartImg,
  MiniCartBottom,
  Attributes,
  Swatch,
  Properties,
  Brand,
  Name,
  Price,
  Quantity,
  Button,
  CartFigure,
  CartQuantity,
  CartContainer,
  MiniButton,
  MiniCartPrices,
  Total,
  TotalPrices
} from "./MiniCartStyle";
import { Link } from "react-router-dom";

class MiniCart extends Component {
  getSelected = (key, val, index) => {
    const data = this.props.cart[index].properties[key];
    if (data) {
      return data === val;
    }
    return false;
  };
  Type = (type, val, id, index) => {
    if (type === "swatch") {
      return (
        <Swatch
          key={val}
          color={val}
          selected={this.getSelected(id, val, index)}
        />
      );
    }
    return (
      <Properties key={val} selected={this.getSelected(id, val, index)}>
        {val}
      </Properties>
    );
  };
  getTotalPrice = () => {
    const totalPrice = this.props.cart.reduce((acc,v) => {
        const price = parseFloat(this.props.price(v.price).slice(1))
        return acc + price
    },0)
    const currency = this.props.currency
    return `${currency}${totalPrice}`
  };
  render() {
    const { cart } = this.props;
    return (
      <MiniCartContainer onClick={(e) => e.stopPropagation()}>
        <MiniCartHeader>
          My Bag
          <span style={{ fontWeight: 500 }}>{`, ${cart.length} Items`}</span>
        </MiniCartHeader>
        <CartContainer>
          {cart.map((item, i) => {
            return (
              <MiniCartItems key={i}>
                <div style={{ width: "100%" }}>
                  <Brand>{item.brand}</Brand>
                  <Name>{item.name}</Name>
                  <Price>{this.props.price(item.price)}</Price>
                  <Attributes>
                    {item.attributes.map((attr, index) => {
                      return (
                        <div
                          style={{
                            flexDirection: "row",
                            display: "flex",
                            gap: "0.5em",
                          }}
                          key={index}
                        >
                          {attr.items.map((v) =>
                            this.Type(attr.type, v.value, attr.id, i)
                          )}
                        </div>
                      );
                    })}
                  </Attributes>
                </div>
                <CartQuantity>
                  <Quantity>
                    <Button onClick={() => this.props.incCart(item)}>+</Button>
                    <span>{item.quantity}</span>
                    <Button onClick={() => this.props.decCart(item)}>-</Button>
                  </Quantity>
                  <CartFigure>
                    <MiniCartImg src={item.image[0]} alt={item.name} />
                  </CartFigure>
                </CartQuantity>
              </MiniCartItems>
            );
          })}
        </CartContainer>
        <MiniCartPrices>
        <Total>Total</Total>
        <TotalPrices>{this.getTotalPrice()}</TotalPrices>
        </MiniCartPrices>
        <MiniCartBottom>
          <Link to={"/cart"}>
            <MiniButton
              bg="#FFFFFF"
              border
              color="#1D1F22"
              onClick={this.props.toggleCart}
            >
              View Bag
            </MiniButton>
          </Link>
          <MiniButton
            bg="#5ECE7B"
            color="#FFFFFF"
            onClick={this.props.toggleCart}
          >
            Checkout
          </MiniButton>
        </MiniCartBottom>
      </MiniCartContainer>
    );
  }
}

export default MiniCart;
