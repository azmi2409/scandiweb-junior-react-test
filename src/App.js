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
import { isEqual } from "lodash";
import "./lib/main.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeCurr = this.changeCurr.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.curRef = React.createRef();
    this.cartRef = React.createRef();
  }

  componentDidMount() {
    this.props.loadCategories();
    this.props.loadCurrencies();
  }

  handleCart = (e) => {
    this.props.toggleCart();
  };

  changeCurr(currency) {
    this.props.changeCurrency(currency);
    this.currOpen();
  }

  currOpen = () => {
    this.props.toggleCurrencies();
  };

  handleProduct = async (product) => {
    this.props.loadProduct(product);
  };

  handleClick = async (category) => {
    this.props.loadCategory(category);
  };

  handleAdd = (item) => {
    const obj = { ...item };
    //find item
    const itemInCart = this.props.cart.find(
      (i) => i.id === obj.id && isEqual(i.properties, obj.properties)
    );
    this.props.addCart(obj, itemInCart);
  };

  getPrice = (prices) => {
    const index = prices.findIndex(
      (v) => v.currency.symbol === this.props.currency
    );
    return prices[index].currency.symbol + prices[index].amount;
  };
  render() {
    return (
      <BrowserRouter>
        <Header
          curRef={this.curRef}
          cartRef={this.cartRef}
          chCurr={this.changeCurr}
          curr={this.currOpen}
          handleCart={this.handleCart}
          {...this.props}
        />
        <Main>
          {this.props.isCartOpen && <CartOverlay cartRef={this.cartRef} price={this.getPrice} {...this.props} />}
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
