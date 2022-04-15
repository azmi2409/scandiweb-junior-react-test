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
  ArrowImg,
  CurrItem,
  CurrSymbol
} from "./HeaderStyle";
import { withParams } from "../../lib/helpers";
import Brand from "../../assets/Brand.svg";
import Cart from "../../assets/Cart.svg";
import Arrow from "../../assets/Arrow.svg";
import OutsideWrapper from "./OutsideWrapper";

class Header extends Component {
  render() {
    const {
      categories,
      currencies,
      isCurrencyOpen,
      curr,
      chCurr,
      cart,
      navigate,
    } = this.props;
    return (
      <Container>
        <NavCategory>
          <NavLink>
            {categories &&
              categories.map((v, i) => (
                <NavItem
                  key={i}
                  onClick={() => navigate(`/${v}`)}
                  active={this.props.selected === v}
                >
                  {v}
                </NavItem>
              ))}
          </NavLink>
        </NavCategory>
        <NavBrand>
          <img src={Brand} alt="Brand" />
        </NavBrand>
        <NavMenus>
          <NavMenu key={"currencies"} ref={this.props.curRef} onClick={curr}>
            <CurrSymbol>
              {this.props.currency}
            </CurrSymbol>
            <ArrowImg
              rotate={isCurrencyOpen ? "true" : ""}
              src={Arrow}
              alt="Arrow"
            />
            {isCurrencyOpen && (
              <OutsideWrapper
                parentRef={this.props.curRef}
                action={this.props.closeCurrencies}
              >
                <Currency onClick={(e) => e.stopPropagation()}>
                    {currencies
                      .filter((v) => v.symbol !== this.props.currency)
                      .map((v, i) => (
                        <CurrItem
                          onClick={() => chCurr(v.symbol)}
                          key={i}
                        >{`${v.symbol} ${v.label}`}</CurrItem>
                      ))}
                </Currency>
              </OutsideWrapper>
            )}
          </NavMenu>
          <NavMenu
            key={"miniCart"}
            ref={this.props.cartRef}
            onClick={this.props.handleCart}
          >
            <img src={Cart} alt="Cart" />
            {cart.length > 0 && <CartNumber>{cart.length}</CartNumber>}
          </NavMenu>
        </NavMenus>
      </Container>
    );
  }
}

export default withParams(Header);