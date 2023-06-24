import { Link } from 'react-router-dom';
const AuthNav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
