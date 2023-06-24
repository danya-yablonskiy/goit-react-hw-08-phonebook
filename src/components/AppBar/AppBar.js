import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getStateSelector } from 'store/selector';

const AppBar = () => {
  const { auth } = useSelector(getStateSelector);
  return (
    <header>
      <Navigation />
      {!auth.isLoggedIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
};
export default AppBar;
