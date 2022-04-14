import {
  ADD_TO_CART,
  ADD_TO_CATEGORIES,
  CHANGE_CURRENCY,
  ADD_CURRENCIES,
  SET_CATEGORY,
  TOGGLE_CART,
  TOGGLE_CURRENCIES,
  SET_PRODUCT,
  SET_PRODUCTS,
  INC_CART,
  DEC_CART,
  CLOSE_CART,
  CLOSE_CURRENCIES,
  OPEN_CART,
  OPEN_CURRENCIES
} from "../actions/cartActions";
import { isEqual } from "lodash";

const initState = {
  categories: ["all"],
  category: "all",
  products: [],
  product: "",
  cart: [],
  currencies: [],
  currency: "$",
  isCartOpen: false,
  isCurrenciesOpen: false,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { cart } = state;
      const { product } = action;
      const newCart = [...cart, product];
      return {
        ...state,
        cart: newCart,
      };
    }
    case ADD_TO_CATEGORIES:
      return { ...state, categories: action.categories };
    case CHANGE_CURRENCY:
      return { ...state, currency: action.currency };
    case ADD_CURRENCIES:
      return { ...state, currencies: action.currencies };
    case SET_CATEGORY:
      return { ...state, category: action.category };
    case TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen };
    case TOGGLE_CURRENCIES:
      return { ...state, isCurrenciesOpen: !state.isCurrenciesOpen };
    case SET_PRODUCT:
      return { ...state, product: action.product };
    case SET_PRODUCTS:
      return { ...state, products: action.products };
    case INC_CART: {
      const { cart } = state;
      const { product } = action;
      const newCart = [...cart];
      const index = newCart.findIndex((item) => item.id === product.id && isEqual(item.properties, product.properties));
      newCart[index].quantity += 1;
      return {
        ...state,
        cart: newCart,
      };
    }
    case DEC_CART: {
      const { cart } = state;
      const { product } = action;
      const newCart = [...cart];
      const index = newCart.findIndex((item) => item.id === product.id && isEqual(item.properties, product.properties));
      newCart[index].quantity -= 1;
      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1);
      }
      return {
        ...state,
        cart: newCart,
      };
    }
    case CLOSE_CART:
      return { ...state, isCartOpen: false };
    case CLOSE_CURRENCIES:
      return { ...state, isCurrenciesOpen: false };
    case OPEN_CART:
      return { ...state, isCartOpen: true };
    case OPEN_CURRENCIES:
      return { ...state, isCurrenciesOpen: true };
    default:
      return state;
  }
};
export default cartReducer;
