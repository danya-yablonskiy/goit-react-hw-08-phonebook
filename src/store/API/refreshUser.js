import axios from 'axios';

export const refreshUser = async () => {
  const { data } = await axios(
    'https://connections-api.herokuapp.com/users/current'
  );

  return data;
};
