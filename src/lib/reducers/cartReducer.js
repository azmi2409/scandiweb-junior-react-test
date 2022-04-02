import { ADD_TO_CART , ADD_TO_CATEGORIES} from "../actions/cartActions";

const initState = {
  items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  categories: ['all'],
  addItems: [],
  total: [],
  cart: []
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
    default:
      return state;
  }
};
export default cartReducer;
