import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { getUser } from "../../services/actions/user";

const ProtectedRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  // const [isUserLoaded, setUserLoaded] = useState(false);

  // const init = () => {
  // //  dispatch(getUser());
  //   setUserLoaded(true);
  // };

  // useEffect(() => {
  //   init();
  // }, []);

  // if (!isUserLoaded) {
  //   return null;
  // }
  console.log(user);
  //console.log(isUserLoaded)

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
