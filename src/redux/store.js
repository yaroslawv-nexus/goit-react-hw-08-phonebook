
import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { modalReducer } from "./modalSlice";


export let store = configureStore({
    reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
        auth: authReducer,
        modal: modalReducer
    },
});


