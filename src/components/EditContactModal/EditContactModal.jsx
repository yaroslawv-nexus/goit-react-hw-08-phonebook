import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/modalSlice';
import {
  selectModal,
  selectModalId,
  selectModalName,
  selectModalNumber,
} from 'redux/selectors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';
// import IconButton from '@mui/material/IconButton';

import {
  ErrorMess,
  FieldInputStyle,
  FieldSubmitStyle,
  FormStyle,
  IconCloseStyle,
} from 'components/EditContactModal/EditContactModal.styled';
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
  const contactID = useSelector(selectModalId);
  const contactName = useSelector(selectModalName);
  const contactNum = useSelector(selectModalNumber);
  // console.log(contactID);
  // console.log(contactName);
  // console.log(contactNum);

  const onSubmit = contact => {
    console.log(contactID);
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
            name: contactName,
            number: contactNum,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            const { name, number } = values;
            onSubmit({ name, number });
            resetForm();
            dispatch(closeModal());
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
        <IconCloseStyle
          aria-label="close"
          size="15"
          onClick={() => dispatch(closeModal())}
        >
          <CloseIcon />
        </IconCloseStyle>
      </Modal>
    </div>
  );
};

export default EditContactModal;
