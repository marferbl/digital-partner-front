import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { AuthProviderWrapper } from "./context/userContext";
import { PageRoutes } from "./routes";
import "@fontsource/montserrat/400.css";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProviderWrapper>
    <ChakraProvider theme={theme}>
      <PageRoutes />
    </ChakraProvider>
  </AuthProviderWrapper>
);
