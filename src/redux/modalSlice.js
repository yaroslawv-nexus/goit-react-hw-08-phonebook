import { createSlice } from "@reduxjs/toolkit";



const Slice = createSlice({
    name: "modal",
    initialState: {isOpen: false, id: null,},
    reducers: {
        openModal(state, action) {
            state.isOpen = true;
            state.id = action.payload;
        },
        closeModal(state) {
            state.isOpen = false;
            state.id = null;
        }
    }
})




export const modalReducer = Slice.reducer;

export const { openModal, closeModal} = Slice.actions;