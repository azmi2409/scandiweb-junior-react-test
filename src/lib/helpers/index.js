import { request, gql } from "graphql-request";
import { useParams, useNavigate } from "react-router-dom";
import {
  addToCategories,
  addToCart,
  changeCurrency,
  addCurrencies,
  setCategory,
  toggleCart,
  toggleCurrencies,
  setProduct,
  setProducts,
  incCart,
  decCart,
  closeCart,
  closeCurrencies,
  openCart,
  openCurrencies,
} from "../actions/cartActions";
import DOMPurify from "dompurify";

export function withParams(Component) {
  return (props) => (
    <Component {...props} navigate={useNavigate()} params={useParams()} />
  );
}

const endpoint = `https://graphql-scandiweb.herokuapp.com/`;

export const getCategories = async () => {
  const CATEGORIES_QUERY = gql`
    {
      categories {
        name
      }
    }
  `;
  const res = await request(endpoint, CATEGORIES_QUERY);
  return res.categories;
};

export const getCurrencies = async () => {
  const CURRENCY_QUERY = gql`
    {
      currencies {
        label
        symbol
      }
    }
  `;
  const res = await request(endpoint, CURRENCY_QUERY);
  return res.currencies;
};

export const getCategory = async (category) => {
  const query = gql`
  {
    category(input: {
      title: "${category}"}
      ) {
      products {
        id
        inStock
        brand
        name
        gallery
        attributes {
          id
          name
          type
          items{
            displayValue
            value
            id
          }
        }
        prices{
          amount
          currency{
            symbol
          }
        }
      }
    }
  }`;

  const data = await request(endpoint, query);
  return data.category.products;
};

export const getProduct = async (product) => {
  const query = gql`
  {
    product(id: "${product}") {
      name
      gallery
      description
      brand
      inStock
      attributes {
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      prices{
        amount
        currency{
          symbol
        }
      }
    }
  }`;
  const data = await request(endpoint, query);
  return data.product;
};

export const createMarkup = (html) => {
  const clean = DOMPurify.sanitize(html);
  return clean;
};

export const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    items: state.items,
    cart: state.cart,
    currency: state.currency,
    currencies: state.currencies,
    isCartOpen: state.isCartOpen,
    isCurrencyOpen: state.isCurrenciesOpen,
    selected: state.category,
    product: state.product,
    products: state.products,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addToCategories: (categories) => {
      dispatch(addToCategories(categories));
    },
    addToCart: (obj) => {
      dispatch(addToCart(obj));
    },
    changeCurrency: (currency) => {
      dispatch(changeCurrency(currency));
    },
    addCurrencies: (currencies) => {
      dispatch(addCurrencies(currencies));
    },
    setCategory: (category) => {
      dispatch(setCategory(category));
    },
    toggleCart: () => {
      dispatch(toggleCart());
    },
    toggleCurrencies: () => {
      dispatch(toggleCurrencies());
    },
    setProduct: (product) => {
      dispatch(setProduct(product));
    },
    setProducts: (products) => {
      dispatch(setProducts(products));
    },
    loadCategories: () => {
      loadCategories(dispatch);
    },
    loadCurrencies: () => {
      loadCurrencies(dispatch);
    },
    loadCategory: (category) => {
      loadCategory(dispatch, category);
    },
    loadProduct: (product) => {
      loadProduct(dispatch, product);
    },
    addCart: (product, item) => {
      addCart(dispatch, product, item);
    },
    incCart: (item) => {
      dispatch(incCart(item));
    },
    decCart: (item) => {
      dispatch(decCart(item));
    },
    closeCart: () => {
      dispatch(closeCart());
    },
    closeCurrencies: () => {
      dispatch(closeCurrencies());
    },
    openCart: () => {
      dispatch(openCart());
    },
    openCurrencies: () => {
      dispatch(openCurrencies());
    },
  };
};

function loadCategories(dispatch) {
  getCategories().then((data) => {
    const arr = data.reduce((acc, v) => {
      acc = [...acc, v.name];
      return acc;
    }, []);
    dispatch(addToCategories(arr));
  });
}
function loadCurrencies(dispatch) {
  getCurrencies().then((data) => {
    dispatch(addCurrencies(data));
  });
}
async function loadCategory(dispatch, category) {
  dispatch(setCategory(category));
  const data = await getCategory(category);
  dispatch(setProducts(data));
}
function loadProduct(dispatch, product) {
  getProduct(product).then((data) => {
    dispatch(setProduct(data));
  });
}

export const getDefaultProps = (attributes) => {
  const defaultProps = attributes.reduce((acc, v) => {
    acc[v.name] = v.items[0].value;
    return acc;
  }, {});
  return defaultProps;
};

function addCart(dispatch, product, item) {
  //check if product exists in cart
  if (item) {
    //add to quantity
    return dispatch(incCart(product));
  } else {
    //add new item
    product.quantity = 1;
    return dispatch(addToCart(product));
  }
}