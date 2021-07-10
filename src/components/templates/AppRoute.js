import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { useAuthState } from '../../providers/Auth';

const AppRoute = ({ component: Component, path, isPrivate, ...rest }) => {
  // const userDetails = useAuthState();
  console.log(isPrivate);
  return (
    <Route
      path={path}
      render={(props) => (
        // privateBeforeAuth && !userDetails.token ? (
        //   <Redirect to={'/login'} />
        // ) : privateAfterAuth && userDetails.token ? (
        //   <Redirect to={'/profile'} />
        // ) : (
        //   <Component {...props} />
        // )
        // !isLogged ? <Component {...props} /> : <Redirect to={'/login'} />
        <Component {...props} />
      )}
      {...rest}
    />
  );
};

export default AppRoute;
