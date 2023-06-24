import { FormStyle } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';

import { postContactsThunk } from 'store/options';
import {  getStateSelector } from 'store/selector';

import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Your contact has been successfully added');

export const Form = () => {
  const dispatch = useDispatch();
  const {
    contacts: {
      contacts: { items, isAdding },
    },
  } = useSelector(getStateSelector);

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    const duplicate = items.find(item => item.name === newContact.name);

    if (duplicate) {
      alert('This name is already created in your contact book');
      return;
    }
    dispatch(postContactsThunk(newContact));
    notify()
    e.target.reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label>
        Number <br />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button type="submit" disabled={isAdding} >
        {isAdding ? 'Adding...' : 'Add contact'}
      </button>
      <Toaster/>
    </FormStyle>
  );
};
