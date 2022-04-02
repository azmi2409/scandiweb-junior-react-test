import { request, gql } from "graphql-request";
import { useParams } from "react-router-dom";

export function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const endpoint = `http://10.0.0.22:4000`;

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
