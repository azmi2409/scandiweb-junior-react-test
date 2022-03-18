import React, { Component } from "react";
import ProductList from "./ProductList";
import Header from "./components/Header/Header";
import { request, gql } from "graphql-request";

const endpoint = `http://10.0.0.22:4000`;
const CATEGORIES_QUERY = gql`
  {
    categories {
      name
    }
  }
`;

const getCategory = async (category) => {
  const query = gql`
  {
    category(input: {
      title: "${category}"}
      ) {
      products {
        id
        name
      }
    }
  }`;

  const data = await request(endpoint, query);
  return data.category.products;
};

const getProduct = async (product) => {
  const query = gql`
  {
    product(id: "${product}") {
      name
      inStock
      gallery
      description
      brand
      prices{
        amount
        currency{
          symbol
        }
      }
    }
  }`;
  const data = await request(endpoint, query);
  return data.product;
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
    this.state = {
      categories: [],
      selected: "",
      products: [],
      product: "",
    };
  }

  handleProduct = async (product) => {
    const data = await getProduct(product);
    this.setState({ product: data });
    console.log(data);
  };

  handleClick = async (category) => {
    const data = await getCategory(category);
    this.setState({ selected: category, products: data });
  };

  createMarkup(html) {
    return { __html: html };
  }

  componentDidMount() {
    const data = async () => {
      const res = await request(endpoint, CATEGORIES_QUERY);
      this.setState({
        categories: [...res.categories],
      });
      return res;
    };

    data();
  }
  render() {
    return (
      <div>
        <Header categories={this.state.categories} />
        <ul>
          {this.state.categories.map((category) => {
            return (
              <li
                key={category.name}
                onClick={() => this.handleClick(category.name)}
              >
                {category.name}
              </li>
            );
          })}
        </ul>
        <div>{this.state.selected && <h2>{this.state.selected}</h2>}</div>
        <div>
          <ul>
            {this.state.products &&
              this.state.products.map((v, i) => {
                return (
                  <li key={i} onClick={() => this.handleProduct(v.id)}>
                    {`${v.name} id: ${v.id}`}
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          <h2>Selected Product</h2>
          {this.state.product && (
            <div>
              <ul>
                <li>Name: {this.state.product.name}</li>
                <li>
                  Stock: {this.state.product.inStock ? "Ready" : "Out of Stock"}
                </li>
                <li>
                  Brand: {this.state.product.brand}
                </li>
                <li>
                  Price: {this.state.product.prices[0].currency.symbol+parseInt(this.state.product.prices[0].amount)}
                </li>
              </ul>
              <h3>Product Description</h3>
              <div dangerouslySetInnerHTML={this.createMarkup(this.state.product.description)} />
              <h3>Product Gallery</h3>
              <div>{this.state.product.gallery && this.state.product.gallery.map((v,i) => (<img key={i} style={{maxHeight: '20vh'}} src={v} />))}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
