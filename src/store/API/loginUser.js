import axios from 'axios';

export const loginUser = async user => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/login',
    user
  );

  return data;
};
