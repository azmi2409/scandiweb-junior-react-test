import React, { Component } from "react";
import {
  Container,
  NavLink,
  NavCategory,
  NavItem,
  NavBrand,
  NavMenus,
  NavMenu,
} from "./HeaderStyle";
import Brand from "../../assets/Brand.svg";
import Cart from "../../assets/Cart.svg";
import Arrow from '../../assets/Arrow.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { categories } = this.props;
    return (
      <Container>
        <NavCategory>
          <NavLink>
            {categories &&
              categories?.map((v, i) => <NavItem key={i}>{v.name}</NavItem>)}
          </NavLink>
        </NavCategory>
        <NavBrand>
          <img src={Brand} alt="Brand" />
        </NavBrand>
        <NavMenus>
          <NavMenu>
            <p style={{marginRight: '0.2em'}}>$</p>
          {Arrow && <img src={Arrow} alt="Arrow" />}
          </NavMenu>
          {Cart && <img src={Cart} alt="Cart" />}
        </NavMenus>
      </Container>
    );
  }
}
