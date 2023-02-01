import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../features/pagination/paginationSlice";
import filterReducer from "../features/filter/filterSlice";
import productsReducer from "../features/products/productsSlice";


export default configureStore({
    reducer: {
        pagination: paginationReducer,
        filter: filterReducer,
        products: productsReducer,
    },
});