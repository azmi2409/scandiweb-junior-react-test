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
  CartFigure,
  CartImg,
  Brand,
  Title,
  Name,
  Price
} from "./CartStyle";

export default class Cart extends Component {
  render() {
    const { cart, price } = this.props;
    return (
      <Container>
        <CartHeader>
          <Title>Cart</Title>
        </CartHeader>
        <Grid>
          <div>
            {cart &&
              cart.map((item, index) => {
                return (
                  <CartContainer key={index}>
                    <CartDetails>
                      <Brand>{item.brand}</Brand>
                      <Name>{item.name}</Name>
                      <Price>{price(item.price)}</Price>
                    </CartDetails>
                    <CartQuantity>
                      <Quantity>
                        <Button onClick={() => this.props.decrement(item.id)}>
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button onClick={() => this.props.increment(item.id)}>
                          +
                        </Button>
                      </Quantity>
                      <CartFigure>
                        <CartImg src={item.image} alt={item.name} />
                      </CartFigure>
                    </CartQuantity>
                  </CartContainer>
                );
              })}
          </div>
          <div></div>
        </Grid>
      </Container>
    );
  }
}
