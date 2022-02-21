import React from "react";
import {useSelector} from "react-redux";
import {Redirect, Route, RouteProps} from "react-router-dom";


const ProtectedRoute = ({children, ...rest}: RouteProps) => {
  const {user} = useSelector((state: any) => state.userReducer);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;

