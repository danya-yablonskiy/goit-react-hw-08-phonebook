import { useDispatch } from 'react-redux';
import { setFilter } from 'store/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label>
      Find contact by name <br />
      <input type="text" onChange={changeFilter}></input>
    </label>
  );
};
