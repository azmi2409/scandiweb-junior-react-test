import React, { Component } from "react";
import {
  Container,
  NavLink,
  NavCategory,
  NavItem,
  NavBrand,
  NavMenus,
  NavMenu,
  CartNumber,
  Currency,
  ArrowImg
} from "./HeaderStyle";
import { Link } from "react-router-dom";
import Brand from "../../assets/Brand.svg";
import Cart from "../../assets/Cart.svg";
import Arrow from "../../assets/Arrow.svg";

export default class Header extends Component {
  render() {
    const { categories, currencies, isCurrencyOpen, curr, chCurr, cart, handleCart } =
      this.props;
    return (
      <Container>
        <NavCategory>
          <NavLink>
            {categories &&
              categories.map((v, i) => (
                <Link style={{ textDecoration: "none" }} to={`/${v}`} key={i}>
                  <NavItem active={this.props.selected === v}>{v}</NavItem>
                </Link>
              ))}
          </NavLink>
        </NavCategory>
        <NavBrand>
          <img src={Brand} alt="Brand" />
        </NavBrand>
        <NavMenus>
          <NavMenu onClick={curr}>
            <p style={{ marginRight: "0.2em" }}>{this.props.currency}</p>
            <ArrowImg
              rotate={isCurrencyOpen ? true : false}
              src={Arrow}
              alt="Arrow"
            />
            {isCurrencyOpen && (
              <Currency ref={this.props.innerRef}>
                <ul style={{ listStyle: "none", padding: "0.8em" }}>
                  {currencies
                    .filter((v) => v.symbol !== this.props.currency)
                    .map((v, i) => (
                      <li
                        onClick={() => chCurr(v.symbol)}
                        style={{ margin: "0.8em 0" }}
                        key={i}
                      >{`${v.symbol} ${v.label}`}</li>
                    ))}
                </ul>
              </Currency>
            )}
          </NavMenu>
          <NavMenu onClick={handleCart}>
            <img src={Cart} style={{ position: "relative" }} alt="Cart" />
            {cart.length > 0 && <CartNumber>{cart.length}</CartNumber>}
          </NavMenu>
        </NavMenus>
      </Container>
    );
  }
}
