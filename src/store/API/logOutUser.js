import axios from 'axios';

export const logOutUser = async () => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/logout'
  );

  return data;
};
