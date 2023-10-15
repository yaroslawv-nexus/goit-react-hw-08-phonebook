import { createSlice } from "@reduxjs/toolkit";



const Slice = createSlice({
    name: "modal",
    initialState: {isOpen: false, id: null, name: null, number: null},
    reducers: {
        openModal(state, action) {
            const { id, name, number } = action.payload.contact;
            state.isOpen = true;
            state.id = id;
            state.name = name;
            state.number = number;
        },
        closeModal(state) {
            state.isOpen = false;
            state.id = null;
        }
    }
})




export const modalReducer = Slice.reducer;

export const { openModal, closeModal} = Slice.actions;