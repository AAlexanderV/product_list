import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../features/page/pageSlice";
import filterReducer from "../features/filter/filterSlice";
import productsReducer from "../features/products/productsSlice";

export default configureStore({
    reducer: {
        page: pageReducer,
        filter: filterReducer,
        products: productsReducer,
    },
});