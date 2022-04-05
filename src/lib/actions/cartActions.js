export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CATEGORIES = "ADD_TO_CATEGORIES";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const ADD_CURRENCIES = "ADD_CURRENCIES";
export const addToCart = (obj) => {
  return {
    type: ADD_TO_CART,
    obj,
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
}
export const addCurrencies = (currencies) => {
  return {
    type: ADD_CURRENCIES,
    currencies,
  };
}
