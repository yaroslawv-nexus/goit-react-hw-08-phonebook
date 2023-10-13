import { CreateContactForm } from 'components/ContactForm/CreateContactForm';
import { ContactList } from 'components/ContactsLIst/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { selectError, selectLoad } from 'redux/selectors';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoad);
  const error = useSelector(selectError);

  return (
    <>
      <CreateContactForm />
      {isLoading && !error && <BarLoader color="#363bd7" />}
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
