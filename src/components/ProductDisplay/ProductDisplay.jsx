import { Container, SidePict, Description , MainPict } from "./ProductDisplayStyle";
import { Component } from "react";
import { withParams } from "../../lib/helpers/"

class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictIndex: 0,
  }
}
  chPict = (id) => {
    this.setState({pictIndex: id})
  }

  componentDidMount() {
    const product = this.props.params.product;
    const handleProduct = this.props.handleProduct;
    handleProduct(product).then(() => document.title  = `Product Page | ${this.props.product.name}`);
  }
  render() {
    const { product,price } = this.props;
    const { pictIndex } = this.state;
    const Type = (type,val) => {
      if(type === 'swatch' ){
        return <div className="swatch" style={{background: val,height: '30px',width: '30px'}}>
        </div>
      }
      return (
        <div>
        <p>{val}</p>
        </div>
      )
    }
    return (
      <div className="wrapper">
        <Container>
          <SidePict>
            {product &&
              product.gallery &&
              product.gallery.map((v, i) => (
                <img
                  loading="lazy"
                  style={{ maxHeight: 100, marginTop: "0.5em",cursor: 'pointer' }}
                  key={i}
                  src={v}
                  alt="Product"
                  onClick={() => this.chPict(i)}
                />
              ))}
          </SidePict>
          <MainPict>
            {product && <img style={{maxHeight: '100%'}} loading="lazy" src={product.gallery[pictIndex]} alt="Product" />}
          </MainPict>
          {product && (
            <Description>
              <h2 style={{padding: 0,margin: 0,fontWeight: 600}}>{product.brand}</h2>
              <h2 style={{fontWeight: 400}}>{product.name}</h2>
              <h3>{price(product.prices)}</h3>
              {product.attributes.map((v, i) => (
                <div style={{display: 'flex',flexDirection: 'row',gap: '1em',justifyContent: 'center',alignItems: 'center'}} key={i}>
                  <h3>{v.name}</h3>
                  {v.items.map((val, i) => (
                    <p key={i}>{Type(v.type,val.value)}</p>
                  ))}
                  </div>
              )
              )}
            </Description>
          )}
        </Container>
      </div>
    );
  }
}

export default withParams(ProductDisplay);