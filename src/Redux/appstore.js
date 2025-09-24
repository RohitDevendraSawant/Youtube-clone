import { configureStore } from '@reduxjs/toolkit';
import AppReducer from "./appSlice";
import CacheReducer from "./cacheSlice";

const AppStore = configureStore(
    {
        reducer: {
            app: AppReducer,
            cache: CacheReducer,
        },
    }
);


export default AppStore;