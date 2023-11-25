import React, { createContext, useEffect, useState } from "react";
import { useBackendUrlBuilder } from "../hooks/useBackendUrlBuilder";
import axios from "axios";

const UserContext = createContext({});

function AuthProviderWrapper(props) {
  const verifyUrl = useBackendUrlBuilder("/user/verify");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setUser] = useState();

  const storeToken = (token) => {
    localStorage.setItem("token", token);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const logOutUser = () => {
    removeToken();
    setIsLoggedIn(false);
    setIsLoading(false);
    setUser(null);
  };

  const authenticateUser = () => {
    const storedToken = getToken();

    if (!storedToken) {
      logOutUser();
    } else {
      axios
        .get(verifyUrl, {
          headers: {
            authorization: `Bearer ${storedToken || ""}`,
          },
        })
        .then(({ data }) => {
          const user = data;
          setIsLoggedIn(true);
          setUser(user);
          setIsLoading(false);
        })
        .catch(() => logOutUser());
    }
  };

  useEffect(() => {
    authenticateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        loggedUser,
        storeToken,
        authenticateUser,
        logOutUser,
        getToken,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, AuthProviderWrapper };
