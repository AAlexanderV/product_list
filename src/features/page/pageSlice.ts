import { createSlice } from "@reduxjs/toolkit";

const initialState = ()=>{
    const searchParams = new URLSearchParams(document.location.search);

    return {
        value: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
    }
}

export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        nextPage: (state) => {
            state.value += 1;
        },
        prevPage: (state) => {
            state.value -= 1;
        },
    }
});

export const {nextPage, prevPage} = pageSlice.actions;

export default pageSlice.reducer;