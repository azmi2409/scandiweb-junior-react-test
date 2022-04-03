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
  ButtonWrapper,
  Submit,
  ProductDesc,
} from "./ProductDisplayStyle";
import { Component } from "react";
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
      return;
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
          onClick={() => this.addProps(val, name)}
          color={val}
          selected={this.checkProps(name, val)}
        />
      );
    }
    return (
      <Properties
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
          {product &&
            product.gallery &&
            product.gallery.map((v, i) => (
              <Galleries
                loading="lazy"
                key={i}
                src={v}
                alt="Product"
                onClick={() => this.chPict(i)}
              />
            ))}
        </SidePict>
        <MainPict>
          {product && (
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
            {product.attributes.map((v, i) => (
              <Attributes key={i}>
                <AttrName>{v.name}</AttrName>
                <AttrType>
                  {v.items.map((val, i) =>
                    this.Type(v.type, val.value, v.name)
                  )}
                </AttrType>
              </Attributes>
            ))}
            <AttrName>Price:</AttrName>
            <AttrName>{price(product.prices)}</AttrName>
            <ButtonWrapper>
              <Submit onClick={this.handleAddCart}>ADD TO CART</Submit>
            </ButtonWrapper>
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
