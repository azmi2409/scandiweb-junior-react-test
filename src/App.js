import React, { Component } from "react";
import Redirect from "./components/Redirect";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import { addToCategories , addToCart } from "./lib/actions/cartActions";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import { getCategory, getProduct , getCategories , getCurrencies } from "./lib/helpers/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./lib/main.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.currOpen = this.currOpen.bind(this);
    this.changeCurr = this.changeCurr.bind(this);
    this.state = {
      selected: "all",
      products: [],
      product: "",
      currencies: [],
      currency: "$",
      isCartOpen: false,
      isCurrencyOpen: false,
    };
  }

  changeCurr(currency) {
    this.setState({ currency });
    this.currOpen();
  }

  currOpen = () => {
    this.setState({
      isCurrencyOpen: !this.state.isCurrencyOpen,
    });
  };

  handleProduct = async (product) => {
    const data = await getProduct(product);
    this.setState({ product: data });
  };

  handleClick = async (category) => {
    const data = await getCategory(category);
    this.setState({ selected: category, products: data });
  };

  handleAdd = (item) => {
    const obj = {
      id: item.id,
      name: item.name,
      price: item.prices[0].amount,
      currency: item.prices[0].currency.symbol,
      size: item.size,
      quantity: 1,
    }
    this.props.addToCart(obj);
  };

  getPrice = (prices) => {
    const index = prices.findIndex((v) => v.currency.symbol === this.state.currency);
    return prices[index].currency.symbol+prices[index].amount
  }

  componentDidMount() {
    getCategories().then((data) => {
      this.setState({categories: data});
      const arr = data.reduce((acc, v) => {
        acc = [...acc, v.name];
        return acc;
      }, []);
      this.props.addToCategories(arr);
    });
    getCurrencies().then((data) => {
      this.setState({currencies: data});
    });
    };
  render() {
    return (
        <BrowserRouter>
        <Header chCurr={this.changeCurr} curr={this.currOpen} {...this.state} {...this.props} />
          <Routes>
            <Route
              path="/"
              element={
                <Redirect />
              }
            />
            <Route
              path="/:category"
              element={
                <ProductList
                  handleProduct={this.handleProduct}
                  {...this.state} price={this.getPrice} click={this.handleClick} handleAdd={this.handleAdd}
                />
              }
            />
            <Route
              path="/product/:product"
              element={<ProductDisplay price={this.getPrice} {...this.state} handleProduct={this.handleProduct} product={this.state.product} />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
          </Routes>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    items: state.items,
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCategories: (categories) => {
      dispatch(addToCategories(categories));
    },
    addToCart: (obj) => {
      dispatch(addToCart(obj));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
