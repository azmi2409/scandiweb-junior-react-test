import React, { Component } from "react";
import Redirect from "./components/Redirect";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import { mapStateToProps, mapDispatchToProps } from "./lib/helpers/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartOverlay from "./components/Cart/CartOverlay";
import { Main } from "./components/ProductList/ProductListStyle";
import "./lib/main.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeCurr = this.changeCurr.bind(this);
    this.handleProduct = this.handleProduct.bind(this)
    this.myRef = React.createRef();
    this.cartRef = React.createRef();
  }

  handleCart = () => {
    this.props.toggleCart();
  };

  changeCurr(currency) {
    this.props.changeCurrency(currency);
  }

  currOpen = () => {
    this.props.toggleCurrencies();
    if (!this.props.isCurrencyOpen) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
  };

  handleProduct = async (product) => {
    console.log('handleProduct',product)
    this.props.loadProduct(product);
  };

  handleClick = async (category) => {
    this.props.loadCategory(category);
  };

  handleOutsideClick = (e) => {
    if (this.myRef.current) {
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
    this.props.loadCategories();
    this.props.loadCurrencies();
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
          {...this.props}
        />
        <Main>
          {this.props.isCartOpen && <CartOverlay />}
          <Routes>
            <Route path="/" element={<Redirect />} />
            <Route
              path="/:category"
              element={
                <ProductList
                  handleProduct={this.handleProduct}
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
