import { useDispatch } from 'react-redux';
import { ContactItemStyle, DeleteButton, EditButton } from './Contact.styled';
import { deleteContact } from 'redux/contacts/operations';
import { openModal } from 'redux/modalSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactItemStyle>
      <h3>{contact.name}</h3> <p>{contact.number}</p>
      <EditButton
        onClick={e => {
          dispatch(openModal(e.target.id));
        }}
        id={contact.id}
      >
        Edit
      </EditButton>
      <DeleteButton
        onClick={e => dispatch(deleteContact(e.target.id))}
        id={contact.id}
      >
        Delete
      </DeleteButton>
    </ContactItemStyle>
  );
};
