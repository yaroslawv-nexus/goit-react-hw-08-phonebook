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
import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { modalReducer } from "./modalSlice";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



export let store = configureStore({
    reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
        auth: persistReducer(authPersistConfig, authReducer),
        modal: modalReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


