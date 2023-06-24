import { useDispatch, useSelector } from 'react-redux';
import { Button, List, ListItem } from './ContactList.styled';

import { getStateSelector } from 'store/selector';
import { deleteContactsThunk } from 'store/options';
import toast, { Toaster } from 'react-hot-toast';
const notify = () =>
  toast.success('Your contact has been successfully deleted');
export const ContactList = () => {
  const {
    contacts: { contacts },
  } = useSelector(getStateSelector);
  const { filter } = useSelector(getStateSelector);

  const dispatch = useDispatch();

  const filterName = contacts.items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    notify();
    dispatch(deleteContactsThunk(id));
  };

  return (
    <List>
      {contacts.isLoading && <p>Loading...</p>}
      {contacts.error && (
        <p>Oops!Something went wrong. Error: {contacts.error}</p>
      )}
      {filterName.map(item => (
        <ListItem key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          <Button
            type="button"
            onClick={() => deleteContact(item.id)}
            disabled={contacts.isDeleting}
          >
            {contacts.isDeleting ? 'Deleting...' : 'Delete'}
          </Button>
        </ListItem>
      ))}
      <Toaster />
    </List>
  );
};
