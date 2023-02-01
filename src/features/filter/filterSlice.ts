import { createSlice } from "@reduxjs/toolkit";
import urlHandler from "../urlHandler"

const initialState = ()=>{
    const searchParams = new URLSearchParams(document.location.search);

    return {
        value: searchParams.get('id') ? searchParams.get('id') : "",
    }
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.value = action.payload;

            urlHandler("id", state.value);
        },
    }
});

export const {setFilter} = filterSlice.actions;

export default filterSlice.reducer;