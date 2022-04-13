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
} from "../actions/cartActions";

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
    default:
      return state;
  }
};
export default cartReducer;
