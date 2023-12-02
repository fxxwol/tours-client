import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { toursSlice } from './tours/toursSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filtersSlice } from './filter/filterSlice';
import { cartSlice } from './cart/cartSlice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice.reducer),
        tours: toursSlice.reducer,
        filter: filtersSlice.reducer,
        cart: cartSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

export const persistor = persistStore(store);