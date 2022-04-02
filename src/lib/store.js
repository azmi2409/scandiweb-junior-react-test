import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const configureStore = (state = {}) => {
  return createStore(rootReducer,state);
}

export default configureStore;