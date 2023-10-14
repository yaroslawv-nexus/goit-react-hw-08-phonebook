import { createSelector } from "@reduxjs/toolkit";


export const selectContacts = state => state.contacts.contactsList; 
export const selectLoad = state => state.contacts.isLoading; 
export const selectError = state => state.contacts.error; 
export const selectFilter = state => state.filter;
export const selectModal = state => state.modal.isOpen;
export const selectModalId = state => state.modal.id;


export const selectFilterContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
});