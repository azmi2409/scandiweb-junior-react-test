import { createStore,applyMiddleware } from "redux";
import cartReducer from "./reducers/cartReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart','currency']
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

const store = createStore(persistedReducer,applyMiddleware(thunk))
const persistor = persistStore(store)

export {store,persistor}