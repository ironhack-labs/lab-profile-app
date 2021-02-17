import { Route, Redirect } from 'react-router-dom';
import { useAuthInfo } from '../hooks/authContext';

function LoggedOutRoute({ component: Component, ...rest }) {
  const { user } = useAuthInfo();
  return (
    <Route
      {...rest}
      render={(props) =>
        !user.username ? <Component {...props} /> : <Redirect to="/profile" />
      }
    />
  );
}

export default LoggedOutRoute;
