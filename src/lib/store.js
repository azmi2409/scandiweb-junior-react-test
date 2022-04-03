import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'cart',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {store,persistor}