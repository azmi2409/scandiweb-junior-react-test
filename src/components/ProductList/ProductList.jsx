import React, { Component } from "react";
import {
  Grid,
  Container,
  CategoryName,
} from "./ProductListStyle";
import { withParams } from "../../lib/helpers/";
import Cards from "./Card";

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
    const { products } = this.props;
    return (
      <Container>
        <CategoryName>{this.props.selected}</CategoryName>
        <Grid>
          {products &&
            products.map((v, i) => (
              <Cards key={i} v={v} {...this.props} />
            ))}
        </Grid>
      </Container>
    );
  }
}

export default withParams(ProductList);
