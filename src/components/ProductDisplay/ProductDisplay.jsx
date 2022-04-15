import {
  Container,
  SidePict,
  Description,
  Swatch,
  Properties,
  Galleries,
  Brand,
  Item,
  Attributes,
  AttrName,
  AttrType,
  ProductDesc,
  AttrPrice,
  Success,
  Error,
} from "./ProductDisplayStyle";
import React, { Component } from "react";
import { withParams, createMarkup } from "../../lib/helpers/";
import AddButton from "./AddButton";
import Hero from "./Hero";

class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictIndex: 0,
      properties: {},
      success: false,
      error: false,
      errorMsg: "",
    };
    this.handleAddCart = this.handleAddCart.bind(this);
    this.validateProps = this.validateProps.bind(this);
  }
  detailsRef = React.createRef();

  chPict = (id) => {
    this.setState({ pictIndex: id });
  };

  addProps = (val, name) => {
    if (this.props.product.inStock) {
      this.setState({
        properties: {
          ...this.state.properties,
          [name]: val,
        },
      });
    }
  };

  validateProps = () => {
    const { properties } = this.state;
    const { product } = this.props;
    const validate = product.attributes.every((v) => {
      return properties[v.name] !== undefined;
    });
    return validate;
  };

  getErrorMessage = () => {
    const { product } = this.props;
    const { properties } = this.state;
    const error = product.attributes.filter((v) => {
      return properties[v.name] === undefined;
    });
    if (error.length > 0) {
      const allError = error.reduce((acc, v) => {
        return acc + `${v.name} `;
      }, "");

      return `Please select ${allError}`;
    }
  };

  handleAddCart = () => {
    const checked = this.validateProps();
    if (checked) {
      const newItems = {
        properties: this.state.properties,
        id: this.props.params.product,
        name: this.props.product.name,
        brand: this.props.product.brand,
        prices: this.props.product.prices,
        attributes: this.props.product.attributes,
        quantity: 1,
        gallery: this.props.product.gallery,
      };
      this.setState({ success: true });
      setTimeout(() => {
        this.setState({ success: false });
      }, 3000);
      return this.props.handleAdd(newItems);
    }
    this.setState({ error: true, errorMsg: this.getErrorMessage() });
    setTimeout(() => {
      this.setState({ error: false, errorMsg: "" });
    }, 3000);
    return false;
  };

  checkProps = (type, val) => {
    return this.state.properties[type] === val;
  };

  componentDidMount() {
    const product = this.props.params.product;
    const handleProduct = this.props.handleProduct;
    handleProduct(product);
    document.title = `Product Page | ${this.props.product.name}`;
    if (this.detailsRef.current) {
      const html = createMarkup(this.props.product.description);
      this.detailsRef.current.innerHTML = html;
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.product.name !== this.props.product.name) {
      document.title = `Product Page | ${this.props.product.name}`;
    }
    if (prevProps.product.description !== this.props.product.description) {
      const html = createMarkup(this.props.product.description);
      this.detailsRef.current.innerHTML = html;
    }
  }

  Type = (type, val, name) => {
    if (type === "swatch") {
      return (
        <Swatch
          key={val}
          onClick={() => this.addProps(val, name)}
          color={val}
          selected={this.checkProps(name, val)}
          disabled={!this.props.product.inStock}
        />
      );
    }
    return (
      <Properties
        key={val}
        onClick={() => this.addProps(val, name)}
        selected={this.checkProps(name, val)}
        disabled={!this.props.product.inStock}
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
        {product && (
          <>
            <SidePict>
              {product.gallery?.map((v, i) => (
                <Galleries
                  loading="lazy"
                  key={v}
                  src={v}
                  alt="Product"
                  onClick={() => this.chPict(i)}
                />
              ))}
            </SidePict>
            <Hero
              image={product.gallery[pictIndex]}
              inStock={product.inStock}
            />
            <Description>
              <Brand>{product.brand}</Brand>
              <Item>{product.name}</Item>
              <Attributes>
                {product.attributes?.map((v, i) => (
                  <React.Fragment key={i}>
                    <AttrName key={v.name}>{v.name}</AttrName>
                    <AttrType key={v.type}>
                      {v.items.map((val) =>
                        this.Type(v.type, val.value, v.name)
                      )}
                    </AttrType>
                  </React.Fragment>
                ))}
                {this.state.error && (
                  <Error>
                    <span>{this.state.errorMsg}</span>
                  </Error>
                )}
              </Attributes>
              <AttrName>Price:</AttrName>
              <AttrPrice>{price(product.prices)}</AttrPrice>
              <AddButton
                inStock={product.inStock}
                handleAddCart={this.handleAddCart}
              />
              <ProductDesc ref={this.detailsRef} />
            </Description>
          </>
        )}
        {this.state.success && (
          <Success>
            <span>Success Added To Cart</span>
          </Success>
        )}
      </Container>
    );
  }
}

export default withParams(ProductDisplay);
