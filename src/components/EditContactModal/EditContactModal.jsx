import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/modalSlice';
import { selectContacts, selectModal, selectModalId } from 'redux/selectors';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  ErrorMess,
  FieldInputStyle,
  FieldSubmitStyle,
  FormStyle,
} from 'components/ContactForm/CreateContactForm.styled';
import { editContact } from 'redux/contacts/operations';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter your name'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format (xxx-xx-xx)')
    .required('Enter a phone number'),
});

const EditContactModal = () => {
  const modalIsOpen = useSelector(selectModal);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactID = useSelector(selectModalId);

  function checkDuplicate(contact) {
    return contacts.some(
      element => contact.name.toLowerCase() === element.name.toLowerCase()
    );
  }

  const onSubmit = contact => {
    if (checkDuplicate(contact)) {
      alert('the contact already exists');
      return;
    }
    dispatch(editContact({ contactID, contact }));
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => dispatch(closeModal())}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
          }}
        >
          <FormStyle>
            <label>
              Name <FieldInputStyle name="name" type="text" />
            </label>
            <ErrorMess name="name" component="span" />
            <label>
              Number <FieldInputStyle name="number" type="tel" />
            </label>
            <ErrorMess name="number" component="span" />
            <FieldSubmitStyle type="submit">Edit Contact</FieldSubmitStyle>
          </FormStyle>
        </Formik>
        <button onClick={() => dispatch(closeModal())}>Close</button>
      </Modal>
    </div>
  );
};

export default EditContactModal;
