import axios from 'axios';

export const registerUser = async newUser => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/signup',
    newUser
  );

  return data;
};
