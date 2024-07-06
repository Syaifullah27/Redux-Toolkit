import { configureStore } from "@reduxjs/toolkit"
import CounterSlice from "./features/counter/CounterSlice"
import CounterReducer from "./features/counter/CounterReducer"
import menuReducers from "./features/menu/menuSlice"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"

// persist Config
const persistConfig = {
    key: "menu",
    storage
}

// persistReducer
const menuReducer = persistReducer(persistConfig, menuReducers)

const store = configureStore({
    reducer: {
        CounterSlice,
        CounterReducer,
        menuReducer
    }
})

// persist Store
const persistor = persistStore(store)

export {store, persistor }