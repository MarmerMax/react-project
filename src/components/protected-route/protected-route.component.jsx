import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const ProtectedRoute = ({Component, isAuth, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props}/>
        } else {
          return <Redirect to="/"/>
        }
      }}
    />
  );
};