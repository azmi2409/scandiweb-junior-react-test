import { Component } from "react";
import {
  Card,
  ImgWrapper,
  ImgHero,
  PriceWrapper,
  PriceTag,
  Overlay,
  CartLogo,
  CartImage,
  CardContainer,
} from "./ProductListStyle";
import CartCirle from "../../assets/CartCirle.svg";

class Cards extends Component {
  render() {
    const { v, price } = this.props;
    return (
      <CardContainer>
        <Card onClick={() => this.props.navigate(`/product/${v.id}`)}>
          <ImgWrapper>
            <ImgHero loading="lazy" src={v.gallery[0]} alt="Product" />
            {v.inStock && (
              <CartLogo
                onClick={(e) => {
                  e.stopPropagation();
                  this.props.addDefaultCart(v);
                }}
              >
                <CartImage src={CartCirle} alt="add to cart" />
              </CartLogo>
            )}
          </ImgWrapper>
          <PriceWrapper>
            <PriceTag weight={300}>{v.name}</PriceTag>
            <PriceTag weight={500}>{price(v.prices)}</PriceTag>
          </PriceWrapper>
          {!v.inStock && <Overlay>Out of Stock</Overlay>}
        </Card>
      </CardContainer>
    );
  }
}

export default Cards;
