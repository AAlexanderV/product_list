import { createSlice } from "@reduxjs/toolkit";
import urlHandler from "../urlHandler"

const initialState = ()=> {
    const searchParams = new URLSearchParams(document.location.search);

    if(!searchParams.get('page')){
        searchParams.set("page", "1")
        const newUrl = window.location.pathname + "?" + searchParams.toString();
        window.history.pushState(null, "", newUrl);
    }

    return {
        currentPage: Number(searchParams.get('page')),
        totalPages: 0,
    }
}

export const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        nextPage: (state) => {
            state.currentPage += 1;
            urlHandler("page", state.currentPage.toString());
        },
        prevPage: (state) => {
            state.currentPage -= 1;
            urlHandler("page", state.currentPage.toString());
        },
        setTotalPages: (state, action) => {
            state.totalPages = Number(action.payload);
        },
    }
});

export const {nextPage, prevPage, setTotalPages} = paginationSlice.actions;

export default paginationSlice.reducer;