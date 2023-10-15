import { useDispatch } from 'react-redux';
import { ContactItemStyle } from './Contact.styled';
import { deleteContact } from 'redux/contacts/operations';
import { openModal } from 'redux/modalSlice';
import Button from '@mui/material/Button';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactItemStyle>
      <h3>{contact.name}</h3> <p>{contact.number}</p>
      <Button
        variant="contained"
        onClick={e => {
          dispatch(openModal({ contact }));
        }}
        // id={contact.id}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        onClick={e => dispatch(deleteContact(contact.id))}
        // id={contact.id}
      >
        Delete
      </Button>
    </ContactItemStyle>
  );
};
