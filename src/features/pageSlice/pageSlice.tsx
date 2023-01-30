import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        value: 1,
    },
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