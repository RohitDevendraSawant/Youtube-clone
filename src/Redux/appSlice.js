import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "AppSlice",
    initialState:{
        isSideBarOpen: true,
    },
    reducers:{
        toggleSideBar: (state) =>{
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        closeSidebar: (state) => {
            state.isSideBarOpen = false;
        }
    },
});

export const { toggleSideBar, closeSidebar } = appSlice.actions;
export default appSlice.reducer;