import React, { Component } from "react";
import {
  Grid,
  Card,
  Overlay,
  CartLogo,
  Container,
  CategoryName,
  ImgWrapper,
  ImgHero,
  PriceWrapper,
  PriceTag,
} from "./ProductListStyle";
import { Link } from "react-router-dom";
import { withParams } from "../../lib/helpers/";
import CartCirle from "../../assets/CartCirle.svg";

class ProductList extends Component {
  componentDidMount() {
    const category = this.props.params.category;
    this.props.click(category);
    document.title = `Product List Page | ${this.props.selected}`;
  }
  componentDidUpdate(prevProps) {
    if (this.props.params.category !== prevProps.params.category) {
      const category = this.props.params.category;
      this.props
        .click(category)
        .then(
          () => (document.title = `Product List Page | ${this.props.selected}`)
        );
    }
  }
  render() {
    const { products, price } = this.props;
    return (
      <Container>
        <CategoryName>{this.props.selected}</CategoryName>
        <Grid>
          {products &&
            products.map((v, i) => (
              <Card key={i}>
                <ImgWrapper>
                  <ImgHero loading="lazy" src={v.gallery[0]} alt="Product" />
                  {v.inStock && (<CartLogo>
                    <Link to={`/product/${v.id}`}>
                      <img src={CartCirle} alt="add to cart" />
                    </Link>
                  </CartLogo>)}
                </ImgWrapper>
                <PriceWrapper>
                  <PriceTag weight={300}>{v.name}</PriceTag>
                  <PriceTag weight={500}>{price(v.prices)}</PriceTag>
                </PriceWrapper>
                {!v.inStock && <Overlay>Out of Stock</Overlay>}
              </Card>
            ))}
        </Grid>
      </Container>
    );
  }
}

export default withParams(ProductList);
