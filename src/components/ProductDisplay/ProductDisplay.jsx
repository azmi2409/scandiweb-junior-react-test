import { Container, SidePict, Description } from "./ProductDisplayStyle";
import { Component } from "react";
import { withParams } from "../../lib/helpers/"

class ProductDisplay extends Component {
  componentDidMount() {
    const product = this.props.params.product;
    const handleProduct = this.props.handleProduct;
    handleProduct(product);
  }
  render() {
    const { product,price } = this.props;
    return (
      <div className="wrapper">
        <Container>
          <SidePict>
            {product &&
              product.gallery &&
              product.gallery.map((v, i) => (
                <img
                  loading="lazy"
                  style={{ maxHeight: 100, marginTop: "0.5em" }}
                  key={i}
                  src={v}
                  alt="Product"
                />
              ))}
          </SidePict>
          {product && (
            <Description>
              <h1>{product.name}</h1>
              <h3>{price(product.prices)}</h3>
              {product.attributes.map((v, i) => (
                <div key={i}>
                  <p>{v.id}: {v.name}</p>
                  <p>type: {v.type}</p>
                  </div>
              )
              )}
            </Description>
          )}
        </Container>
      </div>
    );
  }
}

export default withParams(ProductDisplay);