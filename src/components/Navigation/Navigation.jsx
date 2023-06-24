import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStateSelector } from 'store/selector';

const Navigation = () => {
  const { auth } = useSelector(getStateSelector);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>{auth.isLoggedIn && <Link to="/contacts">Contacts</Link>}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
