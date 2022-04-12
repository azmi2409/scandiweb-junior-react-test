import React, { Component } from "react";
import Redirect from "./components/Redirect";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import {
  getCategory,
  getProduct,
  getCategories,
  getCurrencies,
  mapStateToProps,
  mapDispatchToProps,
} from "./lib/helpers/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartOverlay from "./components/Cart/CartOverlay";
import { Main } from "./components/ProductList/ProductListStyle";
import "./lib/main.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeCurr = this.changeCurr.bind(this);
    this.myRef = React.createRef();
    this.cartRef = React.createRef();
    this.state = {
      selected: "all",
      products: [],
      product: "",
      isCartOpen: false,
      isCurrencyOpen: false,
    };
  }

  handleCart = () => {
    this.setState({ isCartOpen: !this.state.isCartOpen });
  };

  changeCurr(currency) {
    this.props.changeCurrency(currency);
  }

  currOpen = () => {
    this.setState((state) => ({
      ...state,
      isCurrencyOpen: !state.isCurrencyOpen,
    }));
    if (!this.state.isCurrencyOpen) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
  };

  handleProduct = async (product) => {
    const data = await getProduct(product);
    this.setState({ product: data });
  };

  handleClick = async (category) => {
    const data = await getCategory(category);
    this.setState({ selected: category, products: data });
  };

  handleOutsideClick = (e) => {
    if(this.myRef.current){
      if (this.myRef.current && !this.myRef.current.contains(e.target)) {
        this.currOpen();
    }
  }
  };

  handleAdd = (item) => {
    const obj = { ...item };
    this.props.addToCart(obj);
  };

  getPrice = (prices) => {
    const index = prices.findIndex(
      (v) => v.currency.symbol === this.props.currency
    );
    return prices[index].currency.symbol + prices[index].amount;
  };

  componentDidMount() {
    getCategories().then((data) => {
      this.setState({ categories: data });
      const arr = data.reduce((acc, v) => {
        acc = [...acc, v.name];
        return acc;
      }, []);
      this.props.addToCategories(arr);
    });
    getCurrencies().then((data) => {
      this.props.addCurrencies(data);
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Header
          innerRef={this.myRef}
          curRef={this.cartRef}
          chCurr={this.changeCurr}
          curr={this.currOpen}
          handleCart={this.handleCart}
          {...this.state}
          {...this.props}
        />
        <Main>
          {this.state.isCartOpen && <CartOverlay />}
          <Routes>
            <Route path="/" element={<Redirect />} />
            <Route
              path="/:category"
              element={
                <ProductList
                  handleProduct={this.handleProduct}
                  {...this.state}
                  {...this.props}
                  price={this.getPrice}
                  click={this.handleClick}
                />
              }
            />
            <Route
              path="/product/:product"
              element={
                <ProductDisplay
                  handleAdd={this.handleAdd}
                  chPict={this.chPict}
                  price={this.getPrice}
                  {...this.state}
                  {...this.props}
                  handleProduct={this.handleProduct}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart {...this.props} price={this.getPrice} />}
            />
          </Routes>
        </Main>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
