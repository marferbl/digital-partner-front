import React, { createContext, useEffect, useState } from "react";
import { useBackendUrlBuilder } from "../hooks/useBackendUrlBuilder";
import axios from "axios";
import { getMe } from "../services/auth";

const UserContext = createContext({});

function AuthProviderWrapper(props) {
  const verifyUrl = useBackendUrlBuilder("/user/verify");


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setUser] = useState();
  const [userView, setUserView] = useState();
  const [me, setMe] = useState(null);




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
    const view = localStorage.getItem("userView");

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
          setUserView(view || 'user')

        })
        .catch(() => logOutUser());
    }
  };

  const changeUserView = () => {
    const state = userView === 'user' ? 'corporate' : 'user'
    setUserView(state);
    localStorage.setItem("userView", state);
    window.location.href = state === 'user' ? '/private/profile' : '/private/corporate/profile'
  }


  useEffect(() => {
    authenticateUser();
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
        userView,
        changeUserView,
        setMe,
        me
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, AuthProviderWrapper };
