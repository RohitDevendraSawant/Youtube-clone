import { configureStore } from '@reduxjs/toolkit';
import AppReducer from "./appSlice";
import CacheReducer from "./cacheSlice";
import ChatReducer from "./chatSlice";

const AppStore = configureStore(
    {
        reducer: {
            app: AppReducer,
            cache: CacheReducer,
            chat: ChatReducer,
        },
    }
);


export default AppStore;