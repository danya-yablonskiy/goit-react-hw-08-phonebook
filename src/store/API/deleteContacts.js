import axios from 'axios';

export const deleteContacts = async contactId => {
  const { data } = await axios.delete(
    `https://connections-api.herokuapp.com/contacts/${contactId}`
  );

  return data;
};
