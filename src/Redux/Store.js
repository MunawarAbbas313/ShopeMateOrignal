import { configureStore } from "@reduxjs/toolkit"
import themereducer from "./ThemeSlice"
import searchReducer from "./SearchSlice"
import cartReducer from "./CartSlice"
import AuthReducer from "./UserSlice"
//
export const store = configureStore({
    reducer:{
        theme:themereducer,
        search: searchReducer,
        cart: cartReducer,
        auth:AuthReducer,
    },
});

