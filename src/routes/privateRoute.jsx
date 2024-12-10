import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../context/userContext";
import Navbar from "../components/base/navbar";
import { getMe, updateMe } from "../services/auth";
import { HorizontalMenu } from "../components/base/panel-menu";
import ProfileActionsDropdown from "../components/profile/profile-actions";
import { FiMoreHorizontal } from "react-icons/fi";
import ModalDefaultPhoto from "../components/base/modal-default-photos";
import { FiEdit } from "react-icons/fi";

const PrivateRoute = () => {
  const { isLoggedIn, isLoading, setMe, me } = useContext(UserContext);
  const [routeInHidden, setRouteInHidden] = useState(false);
  const ROUTES_EXCEPTIONS = [
    "/private/digital-profile"
  ]

  useEffect(() => {
    if (isLoggedIn) {
      setMeData();
    }
  }, [isLoggedIn]);

  // useEffect(() => {
  //   if (ROUTES_EXCEPTIONS.includes(window.location.pathname)) {
  //     setRouteInHidden(true);
  //   } else {
  //     setRouteInHidden(false);
  //   }
  // }, [window.location.pathname]);

  const setLogo = (logo) => {
    setMe({ ...me, avatar: logo });
  };


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

  const onSave = (logo) => {
    updateMe({ ...me, avatar: logo }).then((res) => {
      setMe(res.data)
    })
  }

  return (
    <div className="bg-black pb-8" >
      <Navbar />
      {!routeInHidden && <div className="px-10 md:px-28">
        <h2 className="text-6xl md:text-10xl lg:text-12xl font-semibold text-white text-center ">MI PANEL</h2>
        <img src='/profile-banners/profile-banner-1.png' className='w-full h-200' />
        <div className="flex justify-between items-center">
          <div className="flex items-center -mt-4">
            <ModalDefaultPhoto defaultImage={me?.avatar} setLogo={setLogo} onSave={onSave}>
              <div className="relative w-40 h-40 ml-0 md:ml-10">
                {/* Image */}
                <img
                  src={me?.avatar || '/profile-photos/profile-photo-1.png'}
                  alt="Profile Avatar"
                  className="w-40 h-40 rounded-xl"
                />

                {/* Edit Icon */}
                <div className="absolute top-0 left-0 bg-neutral rounded-full p-1 shadow-md cursor-pointer">
                  <FiEdit className="text-gray-600" size={20} />
                </div>
              </div>

            </ModalDefaultPhoto>
            <div className="ml-5">
              <h2 className="text-2xl font-semibold text-white">{me?.name}</h2>
            </div>
            <ProfileActionsDropdown>
              <FiMoreHorizontal className="text-white text-2xl cursor-pointer" />
            </ProfileActionsDropdown>
          </div>
        </div>
        <HorizontalMenu />
      </div>}
      <div className="px-10 md:px-28">
        <Outlet />
      </div>
    </div >

  )
};

export default PrivateRoute;
