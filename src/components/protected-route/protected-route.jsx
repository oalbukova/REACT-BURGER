import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.userReducer);
  const [isUserLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    setUserLoaded(true);
  }, []);

  if (!isUserLoaded) {
    return null;
  }


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
