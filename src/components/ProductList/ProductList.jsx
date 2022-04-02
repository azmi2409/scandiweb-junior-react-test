import React, { Component } from "react";
import { Container , Card , Overlay , CartLogo } from "./ProductListStyle";
import { Link } from "react-router-dom";
import { withParams } from "../../lib/helpers/"
import CartCirle from "../../assets/CartCirle.svg"

class ProductList extends Component {
  componentDidMount() {
    const category = this.props.params.category;
    this.props.click(category);
  }
  componentDidUpdate(prevProps) {
    if (this.props.params.category !== prevProps.params.category) {
      const category = this.props.params.category;
      this.props.click(category);
    }
  }
  render() {
    const {products,price} = this.props;
    return (
      <div className="wrapper">
      <h1 style={{marginLeft: '2em',textTransform: 'capitalize'}}>{this.props.selected}</h1>
      <Container>
        {products && products.map((v, i) => (
          <Card key={i}>
          <div style={{position: 'relative',width: '100%',height: 360}}>
          <img loading="lazy" style={{maxHeight: '360px',width: '100%',objectFit: 'contain'}} src={v.gallery[0]} alt="Product" />
          <CartLogo><Link to={`/product/${v.id}`}><img src={CartCirle} alt="add to cart" /></Link></CartLogo>
          </div>
          <p style={{fontWeight: 300}}>{v.name}</p>
          <p style={{fontWeight: 500}}>{price(v.prices)}</p>
          {!v.inStock && <Overlay>Out of Stock</Overlay>}
          </Card>
        ))}
      </Container>
      </div>
    );
  }
}

export default withParams(ProductList);