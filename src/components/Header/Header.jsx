import React, { Component } from "react";
import {
  Container,
  NavLink,
  NavCategory,
  NavItem,
  NavBrand,
  NavMenus,
  NavMenu,
  Currency
} from "./HeaderStyle";
import { Link } from "react-router-dom";
import Brand from "../../assets/Brand.svg";
import Cart from "../../assets/Cart.svg";
import Arrow from '../../assets/Arrow.svg';

export default class Header extends Component {
  render() {
    const { categories,currencies,isCurrencyOpen,curr,chCurr } = this.props;
    return (
      <Container>
        <NavCategory>
          <NavLink>
            {categories &&
              categories.map((v, i) => (<Link style={{textDecoration: 'none'}} to={`/${v}`} key={i}><NavItem className={(this.props.selected === v)? 'link-active' : ''}>{v}</NavItem></Link>))}
          </NavLink>
        </NavCategory>
        <NavBrand>
          <img src={Brand} alt="Brand" />
        </NavBrand>
        <NavMenus>
          <NavMenu onClick={curr}>
            <p style={{marginRight: '0.2em'}}>{this.props.currency}</p>
          {Arrow && <img className={isCurrencyOpen? 'rotate' : ''} src={Arrow} alt="Arrow" />}
          </NavMenu>
          {Cart && <img src={Cart} alt="Cart" />}
          {isCurrencyOpen && <Currency><ul style={{listStyle: 'none',padding: 0}}>{currencies.map((v,i) => (<li onClick={() => chCurr(v.symbol)} style={{marginBottom: '0.5em'}} key={i}>{`${v.symbol} ${v.label}`}</li>))}</ul></Currency>}
        </NavMenus>
      </Container>
    );
  }
}
