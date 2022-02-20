import React from "react";
import {useSelector} from "react-redux";
import {Redirect, Route, RouteProps} from "react-router-dom";
// styles
import styles from "./protected-route.module.css";
import {BallTriangle} from "react-loader-spinner";


//RouteProps
const ProtectedRoute = ({children, ...rest}: RouteProps) => {
  const {user} = useSelector((state: any) => state.userReducer);

  if (!user?.user) {
    return <div className={styles.loader}>
      <BallTriangle
        color="#4c4cff"
        height={200}
        width={200}
        visible={true}
      />
    </div>
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

