// react redux
import React from "react";
import { useSelector } from "../../services/hooks";
import { Redirect, Route, RouteProps } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }: RouteProps) => {
  const { user } = useSelector((state) => state.userReducer);

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
