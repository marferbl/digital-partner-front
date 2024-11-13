import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../context/userContext";
import Navbar from "../components/base/navbar";
import { getMe } from "../services/auth";
import { HorizontalMenu } from "../components/base/panel-menu";
import ProfileActionsDropdown from "../components/profile/profile-actions";
import { FiMoreHorizontal } from "react-icons/fi";

const PrivateRoute = () => {
  const { isLoggedIn, isLoading, setMe, me } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn) {
      setMeData();
    }
  }, [isLoggedIn]);


  const setMeData = () => {
    getMe().then((res) => {
      setMe(res.data)
    })
  }

  if (isLoading) {
    return <></>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-black pb-8" >
      <Navbar />
      <div className="px-10 md:px-28">
        <h2 className="text-6xl md:text-10xl lg:text-12xl font-semibold text-white text-center ">MI PANEL</h2>
        <img src='/profile-banners/profile-banner-1.png' className='w-full h-200' />
        <div className="flex justify-between items-center">
          <div className="flex items-center -mt-4">
            <img src={me?.avatar} className="w-40 h-40 rounded-full ml-0 md:ml-10" />
            <div className="ml-5">
              <h2 className="text-2xl font-semibold text-white">{me?.name}</h2>
            </div>
            <ProfileActionsDropdown>
              <FiMoreHorizontal className="text-white text-2xl cursor-pointer" />
            </ProfileActionsDropdown>
          </div>
        </div>
        <HorizontalMenu />
      </div>
      <div className="px-10 md:px-28">
        <Outlet />
      </div>
    </div >

  )
};

export default PrivateRoute;
