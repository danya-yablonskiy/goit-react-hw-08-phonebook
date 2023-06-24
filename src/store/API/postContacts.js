import axios from 'axios';

export const postContacts = async newContact => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/contacts',
    newContact
  );

  return data;
};
