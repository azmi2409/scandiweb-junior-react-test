import { request, gql } from "graphql-request";
import { useParams } from "react-router-dom";
import { addToCategories,addToCart,changeCurrency,addCurrencies } from "../actions/cartActions";

export function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
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
        name
        gallery
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
  return { __html: html };
};

export const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    items: state.items,
    cart: state.cart,
    currency: state.currency,
    currencies: state.currencies,
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

  };
};