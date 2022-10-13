import { configureStore } from "@reduxjs/toolkit";

import userReduce from "./users";

export const store = configureStore({
    reducer: {
        userReduce,
    },
});

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;