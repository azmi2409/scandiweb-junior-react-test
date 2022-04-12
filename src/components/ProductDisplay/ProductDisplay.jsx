import {
  Container,
  SidePict,
  Description,
  MainPict,
  Swatch,
  Properties,
  Galleries,
  Gallery,
  Brand,
  Item,
  Attributes,
  AttrName,
  AttrType,
  Submit,
  ProductDesc,
  AttrPrice
} from "./ProductDisplayStyle";
import React, { Component } from "react";
import { withParams, createMarkup } from "../../lib/helpers/";

class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictIndex: 0,
      properties: {},
    };
    this.handleAddCart = this.handleAddCart.bind(this);
    this.validateProps = this.validateProps.bind(this);
  }
  chPict = (id) => {
    this.setState({ pictIndex: id });
  };

  addProps = (val, name) => {
    this.setState({
      properties: {
        ...this.state.properties,
        [name]: val,
      },
    });
  };

  validateProps = () => {
    const { properties } = this.state;
    const { product } = this.props;
    const validate = product.attributes.every((v, i) => {
      return properties[v.name] !== undefined;
    });
    return validate;
  };

  handleAddCart = () => {
    const checked = this.validateProps();
    if (checked) {
      const newItems = {
        properties: this.state.properties,
        id: this.props.params.product,
        name: this.props.product.name,
        brand: this.props.product.brand,
        price: this.props.product.prices,
        attributes: this.props.product.attributes,
        quantity: 1,
        image: this.props.product.gallery[0],
      };
      return this.props.handleAdd(newItems);
    }
    return alert("You Need Fill All The Details");
  };

  checkProps = (type, val) => {
    return this.state.properties[type] === val;
  };

  componentDidMount() {
    const product = this.props.params.product;
    const handleProduct = this.props.handleProduct;
    handleProduct(product).then(
      () => (document.title = `Product Page | ${this.props.product.name}`)
    );
  }

  Type = (type, val, name) => {
    if (type === "swatch") {
      return (
        <Swatch
          key={val}
          onClick={() => this.addProps(val, name)}
          color={val}
          selected={this.checkProps(name, val)}
        />
      );
    }
    return (
      <Properties
        key={val}
        onClick={() => this.addProps(val, name)}
        selected={this.checkProps(name, val)}
      >
        {val}
      </Properties>
    );
  };

  render() {
    const { product, price } = this.props;
    const { pictIndex } = this.state;
    return (
      <Container>
        <SidePict>
          {product && product.gallery &&
            product.gallery.map((v, i) => (
              <Galleries
                loading="lazy"
                key={v}
                src={v}
                alt="Product"
                onClick={() => this.chPict(i)}
              />
            ))}
        </SidePict>
        <MainPict>
          {product && product.gallery && (
            <Gallery
              loading="lazy"
              src={product.gallery[pictIndex]}
              alt="Product"
            />
          )}
        </MainPict>
        {product && (
          <Description>
            <Brand>{product.brand}</Brand>
            <Item>{product.name}</Item>
            <Attributes>
              {product.attributes?.map((v, i) => (
                <React.Fragment key={i}>
                  <AttrName key={v.name}>{v.name}</AttrName>
                  <AttrType key={v.type}>
                    {v.items.map((val) => this.Type(v.type, val.value, v.name))}
                  </AttrType>
                </React.Fragment>
              ))}
            </Attributes>
            <AttrName>Price:</AttrName>
            <AttrPrice>{price(product.prices)}</AttrPrice>
              <Submit onClick={this.handleAddCart}>ADD TO CART</Submit>
            <ProductDesc
              dangerouslySetInnerHTML={createMarkup(product.description)}
            />
          </Description>
        )}
      </Container>
    );
  }
}

export default withParams(ProductDisplay);
