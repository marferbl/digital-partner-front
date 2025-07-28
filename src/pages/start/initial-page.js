import LoginForm from "../../components/Login/login-form";
import { useContext, useEffect, useState } from "react";
import RegisterForm from "../../components/Register/register-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { COLORS } from "../../colors/colors";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContentSwitch from "./ToggleInitial";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function InitialPage() {
  const { t } = useTranslation("global");
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    setShowLogin(location.pathname === '/start');
  }, [location.pathname]);

  useEffect(() => {
    const view = localStorage.getItem("userView");
    isLoggedIn && navigate(view === 'corporate' ? "/private/corporate/profile" : "/private/profile");
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="flex lg:hidden w-full justify-center items-center py-2 shadow-md rounded-2xl bg-white/10  backdrop-blur-xl border border-transparent mb-2">
        <button
          className={`px-4 py-2 font-medium ${!showLogin ? "text-gridyellow" : "text-gray-200"} focus:outline-none`}
          onClick={() => setShowLogin(false)}
        >
          {t('registerKey')}
        </button>
        <button
          className={`px-4 py-2 font-medium ${showLogin ? "text-gridyellow" : "text-gray-200"} focus:outline-none`}
          onClick={() => setShowLogin(true)}
        >
          {t('loginKey')}
        </button>
      </div>
      <div className="relative w-96 md:w-170 h-120 shadow-md rounded-2xl bg-white/10  backdrop-blur-xl border border-transparent">
        {/* Toggle Indicator */}
        <div
          className={`absolute top-1 ${!showLogin ? "left-1" : "left-[calc(50%-4px)]"
            } w-[calc(50%-4px)] h-[calc(100%-8px)] bg-transparent md:bg-blacklogin rounded-xl transition-all duration-300`}
        />

        {/* Left Content */}
        <div
          className={`absolute inset-y-0 left-0 w-full md:w-1/2 flex ${showLogin ? 'items-end justify-start' : 'items-center justify-center'}  text-gray-600
            transition-all duration-300`}
        >
          <p className="text-sm font-medium text-center cursor-pointer " onClick={() => setShowLogin(false)}>
            {showLogin ? (
              <div className="flex flex-col items-start p-8 hidden md:flex">
                <span className="text-neutral">
                  {t('initialPage.noAccount')}
                </span>
                <span className="text-xl text-white flex">
                  {t('initialPage.createOneNow')}
                  <IoIosArrowRoundForward size={30} />
                </span>
              </div>
            ) : (
              <RegisterForm />
            )}
          </p>
        </div>

        {/* Right Content */}
        <div
          className={`absolute inset-y-0 right-0 w-full md:w-1/2 flex ${!showLogin ? 'items-end justify-start' : 'items-center justify-center'}  ${showLogin ? "text-gray-600" : "text-gray-800"
            } transition-all duration-300`}
        >
          <p className="text-sm font-medium text-center cursor-pointer" onClick={() => setShowLogin(true)}>
            {showLogin ? (
              <LoginForm />
            ) : (
              <div className="flex flex-col items-start p-8 hidden md:flex">
                <span className="text-neutral">
                  {t('initialPage.alreadyHaveAccount')}
                </span>
                <span className="text-xl text-white flex">
                  {t('initialPage.loginNow')}
                  <IoIosArrowRoundForward size={30} />
                </span>
              </div>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
