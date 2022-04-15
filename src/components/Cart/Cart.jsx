import React, { Component } from "react";
import {
  Container,
  Grid,
  CartHeader,
  CartQuantity,
  CartDetails,
  CartContainer,
  Quantity,
  Button,
  Brand,
  Title,
  Name,
  Price,
  Swatch,
  Properties,
  Attributes,
} from "./CartStyle";
import Carousel from "./Carousel";

export default class Cart extends Component {
  componentDidMount() {
    document.title = `Cart ${this.props.cart.length} Items`;
  }
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
  getSelected = (key, val, index) => {
    const data = this.props.cart[index].properties[key];
    if (data) {
      return data === val;
    }
    return false;
  };
  render() {
    const { cart, price } = this.props;
    return (
      <Container>
        <CartHeader>
          <Title>Cart</Title>
          {cart.length === 0 && <Name>Your cart is empty</Name>}
        </CartHeader>
        <Grid>
          <div>
            {cart &&
              cart.map((item, i) => {
                return (
                  <CartContainer key={i}>
                    <CartDetails>
                      <Brand>{item.brand}</Brand>
                      <Name>{item.name}</Name>
                      <Price>{price(item.price)}</Price>
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
                    </CartDetails>
                    <CartQuantity>
                      <Quantity>
                        <Button onClick={() => this.props.incCart(item)}>
                          +
                        </Button>
                        <div>{item.quantity}</div>
                        <Button onClick={() => this.props.decCart(item)}>
                          -
                        </Button>
                      </Quantity>
                      <Carousel image={item.image} />
                    </CartQuantity>
                  </CartContainer>
                );
              })}
          </div>
        </Grid>
      </Container>
    );
  }
}
