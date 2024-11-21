import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  Center,
  IconProps,
  Icon,
} from "@chakra-ui/react";
import LoginForm from "../../components/Login/login-form";
import { useContext, useEffect, useState } from "react";
import RegisterForm from "../../components/Register/register-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { COLORS } from "../../colors/colors";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa useTranslation
import ContentSwitch from "./ToggleInitial";

export default function InitialPage() {
  const { t } = useTranslation("global"); // Inicializa la traducción
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
    <div className="flex items-center justify-center min-h-screen w-full">
<div className="relative w-160 h-110 shadow-md rounded-lg bg-white/10 backdrop-blur-md border border-white/10">
        {/* Toggle Indicator */}
        <div
          className={`absolute top-1 ${!showLogin ? "left-1" : "left-[calc(50%-4px)]"
            } w-[calc(50%-4px)] h-[calc(100%-8px)] bg-black rounded-lg transition-all duration-300`}
        />

        {/* Left Content */}
        <div
          className={`absolute inset-y-0 left-0 w-1/2 flex items-center justify-center cursor-pointer text-gray-600
            transition-all duration-300`}
          onClick={() => setShowLogin(false)}
        >
          <p className="text-sm font-medium text-center" onClick={() => setShowLogin(false)}>
            {showLogin ? (
              <span className="text-8xl w-40 break-words">
                Registro
              </span>
            ) : (
              <RegisterForm />
            )}
          </p>
        </div>

        {/* Right Content */}
        <div
          className={`absolute inset-y-0 right-0 w-1/2 flex items-center justify-center cursor-pointer ${showLogin ? "text-gray-600" : "text-gray-800"
            } transition-all duration-300`}
          onClick={() => setShowLogin(true)}
        >
          <p className="text-sm font-medium text-center" onClick={() => setShowLogin(true)}>
            {showLogin ? (
              <LoginForm />
            ) : (
              <span className="text-8xl max-w-full break-words">Login</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );

};
