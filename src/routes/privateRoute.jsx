import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SimpleSidebar from "../components/base/sidebar";
import { Box } from "@chakra-ui/react";

import { UserContext } from "../context/userContext";
import { NavbarUser } from "../components/base/nav-user";

const PrivateRoute = () => {
  const { isLoggedIn, isLoading, loggedUser } = useContext(UserContext);

  const [user, setUser] = useState();

  const getUser = async () => {
    setUser("user");
  };

  useEffect(() => {
    loggedUser && getUser();
  }, [loggedUser]);

  if (isLoading) {
    return <></>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <SimpleSidebar>
    <NavbarUser />
    <Box>
      <Outlet />
    </Box>
  </SimpleSidebar>
};

export default PrivateRoute;
