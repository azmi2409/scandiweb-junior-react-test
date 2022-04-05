import { ADD_TO_CART , ADD_TO_CATEGORIES, CHANGE_CURRENCY , ADD_CURRENCIES} from "../actions/cartActions";

const initState = {
  categories: ['all'],
  cart: [],
  currencies: [],
  currency: '$'

};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
    const id = action.obj.id;
    const existing = state.cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
      return {
        ...state,
        cart: [...state.cart]
      };
    }
    return {...state, cart: [...state.cart, action.obj]};
    }
    case ADD_TO_CATEGORIES: return { ...state, categories: action.categories };
    case CHANGE_CURRENCY: return { ...state, currency: action.currency };
    case ADD_CURRENCIES: return { ...state, currencies: action.currencies };
    default:
      return state;
  }
};
export default cartReducer;
