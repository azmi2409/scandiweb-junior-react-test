export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CATEGORIES = "ADD_TO_CATEGORIES";
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
