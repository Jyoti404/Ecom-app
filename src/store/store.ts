import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import wishlistSlice from "./reducers/wishlistSlice";
import userSlice from "./reducers/userSlice"
import { persistedCartSlice } from "./persisted/persistConfig";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
export const store=configureStore({
    reducer:{
        cartSlice:persistedCartSlice,
        userSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor=persistStore(store)
export type RootState=ReturnType<typeof store.getState>