import React, { Component } from "react";
import { Grid, Container, CategoryName, Success } from "./ProductListStyle";
import { withParams } from "../../lib/helpers/";
import Cards from "./Card";
import {getDefaultProps} from "../../lib/helpers/";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      msg: "",
    };
  }

  addDefaultCart = (product) => {
    const newProduct = {
      properties: getDefaultProps(product.attributes),
      id: product.id,
      name: product.name,
      brand: product.brand,
      prices: product.prices,
      attributes: product.attributes,
      quantity: 1,
      gallery: product.gallery,
    }
    const { handleAdd } = this.props;
    handleAdd(newProduct);
    this.setState({ success: true, msg: `Added ${product.name} to Cart` });
    setTimeout(() => {
      this.setState({ success: false, msg: "" });
    }, 2000);
  };

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
    const { products } = this.props;
    return (
      <Container>
        <CategoryName>{this.props.selected}</CategoryName>
        <Grid>
          {products &&
            products.map((v, i) => (
              <Cards
                key={i}
                v={v}
                addDefaultCart={this.addDefaultCart}
                {...this.props}
              />
            ))}
        </Grid>
        {this.state.success && <Success>{this.state.msg}</Success>}
      </Container>
    );
  }
}

export default withParams(ProductList);
