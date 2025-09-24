import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cacheSlice",
    initialState: {

    },
    reducers: {
        addToCache: (state, action) => {
            Object.assign(state, action.payload);
        },
    },
});

export const { addToCache } = cacheSlice.actions;
export default cacheSlice.reducer;