import { useDispatch } from 'react-redux';

import { registerUserThunk } from 'store/options';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSumbit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(registerUserThunk(newUser));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterPage;
