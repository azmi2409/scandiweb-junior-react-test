export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CATEGORIES = "ADD_TO_CATEGORIES";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const ADD_CURRENCIES = "ADD_CURRENCIES";
export const SET_CATEGORY = "SET_CATEGORY";
export const TOGGLE_CART = "TOGGLE_CART";
export const TOGGLE_CURRENCIES = "TOGGLE_CURRENCIES";
export const SET_PRODUCT = "SET_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const INC_CART = "INC_CART";
export const DEC_CART = "DEC_CART";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};
export const addToCategories = (categories) => {
  return {
    type: ADD_TO_CATEGORIES,
    categories,
  };
};
export const changeCurrency = (currency) => {
  return {
    type: CHANGE_CURRENCY,
    currency,
  };
};
export const addCurrencies = (currencies) => {
  return {
    type: ADD_CURRENCIES,
    currencies,
  };
};
export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category,
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};
export const toggleCurrencies = () => {
  return {
    type: TOGGLE_CURRENCIES,
  };
};
export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product,
  };
};
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};
export const incCart = (product) => {
  return {
    type: INC_CART,
    product,
  };
}

export const decCart = (product) => {
  return {
    type: DEC_CART,
    product,
  };
}